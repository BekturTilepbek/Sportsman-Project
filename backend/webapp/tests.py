from datetime import timedelta
from decimal import Decimal

from django.test import TestCase
from django.utils import timezone

from webapp.models import Category, Product


class ProductDiscountTests(TestCase):
    def setUp(self):
        self.category = Category.objects.create(name="Протеин")

    def _make_product(self, **kwargs):
        defaults = dict(
            category=self.category,
            name="Test Whey",
            price=Decimal("1000"),
        )
        defaults.update(kwargs)
        return Product.objects.create(**defaults)

    def test_no_discount_by_default(self):
        product = self._make_product()
        self.assertFalse(product.is_discount_active)
        self.assertEqual(product.final_price, Decimal("1000"))

    def test_discount_without_dates_is_active_immediately(self):
        product = self._make_product(discount_percent=20)
        self.assertTrue(product.is_discount_active)
        self.assertEqual(product.final_price, Decimal("800"))

    def test_discount_before_start_date_is_inactive(self):
        product = self._make_product(
            discount_percent=50,
            discount_starts_at=timezone.now() + timedelta(days=1),
        )
        self.assertFalse(product.is_discount_active)
        self.assertEqual(product.final_price, Decimal("1000"))

    def test_discount_after_end_date_is_inactive(self):
        product = self._make_product(
            discount_percent=50,
            discount_ends_at=timezone.now() - timedelta(days=1),
        )
        self.assertFalse(product.is_discount_active)
        self.assertEqual(product.final_price, Decimal("1000"))

    def test_discount_within_active_window(self):
        product = self._make_product(
            discount_percent=15,
            discount_starts_at=timezone.now() - timedelta(days=1),
            discount_ends_at=timezone.now() + timedelta(days=1),
        )
        self.assertTrue(product.is_discount_active)
        self.assertEqual(product.final_price, Decimal("850"))

    def test_discount_percent_rounding(self):
        # 999 * (100-33)/100 = 669.33 -> округление до целого (decimal_places=0 у price)
        product = self._make_product(price=Decimal("999"), discount_percent=33)
        self.assertEqual(product.final_price, Decimal("669"))