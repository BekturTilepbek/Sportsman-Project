from datetime import timedelta
from decimal import Decimal

from django.test import TestCase
from django.utils import timezone
from rest_framework.test import APIClient

from webapp.models import Category, Order, OrderItem, Product


class OrderDiscountApiTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.category = Category.objects.create(name="Протеин")
        self.product = Product.objects.create(
            category=self.category,
            name="Test Whey",
            price=Decimal("1000"),
        )

    def _order_payload(self, quantity=2):
        return {
            "first_name": "Bektur",
            "phone": "0500123123",
            # Сумма от фронта игнорируется backend'ом — пересчитывается на сервере
            "total_amount": "999999",
            "items": [{"product_id": self.product.id, "quantity": quantity}],
        }

    def test_order_total_ignores_client_supplied_amount(self):
        response = self.client.post("/api/v1/orders/", self._order_payload(quantity=2), format="json")
        self.assertEqual(response.status_code, 201, response.content)

        order = Order.objects.get(pk=response.data["id"])
        # Без скидки: 1000 * 2 = 2000, а не то, что прислал фронт
        self.assertEqual(order.total_amount, Decimal("2000"))

    def test_order_total_with_active_discount(self):
        self.product.discount_percent = 20
        self.product.save()

        response = self.client.post("/api/v1/orders/", self._order_payload(quantity=2), format="json")
        self.assertEqual(response.status_code, 201, response.content)

        order = Order.objects.get(pk=response.data["id"])
        # 1000 * 0.8 = 800 за штуку -> 1600 за 2 шт.
        self.assertEqual(order.total_amount, Decimal("1600"))

        item = OrderItem.objects.get(order=order)
        self.assertEqual(item.price, Decimal("800"))

    def test_order_total_with_expired_discount_uses_full_price(self):
        self.product.discount_percent = 50
        self.product.discount_ends_at = timezone.now() - timedelta(days=1)
        self.product.save()

        response = self.client.post("/api/v1/orders/", self._order_payload(quantity=1), format="json")
        self.assertEqual(response.status_code, 201, response.content)

        order = Order.objects.get(pk=response.data["id"])
        self.assertEqual(order.total_amount, Decimal("1000"))

    def test_product_list_exposes_discount_fields(self):
        self.product.discount_percent = 10
        self.product.save()

        response = self.client.get("/api/v1/products/")
        self.assertEqual(response.status_code, 200)

        data = response.data[0]
        self.assertIn("final_price", data)
        self.assertIn("is_discount_active", data)
        self.assertIn("discount_percent", data)
        self.assertEqual(Decimal(data["final_price"]), Decimal("900"))
        self.assertTrue(data["is_discount_active"])