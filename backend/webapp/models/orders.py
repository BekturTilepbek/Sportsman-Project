from django.db import models


class Order(models.Model):
    first_name = models.CharField(max_length=100, verbose_name="Имя")
    phone = models.CharField(max_length=20, verbose_name="Телефон")
    total_amount = models.DecimalField(max_digits=10, decimal_places=0, default=0, verbose_name="Сумма заказа")

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Заказ"
        verbose_name_plural = "Заказы"
        ordering = ['-created_at']

    def __str__(self):
        return f"Заказ #{self.pk} - {self.first_name}"


class OrderItem(models.Model):
    order = models.ForeignKey("webapp.Order", related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey("webapp.Product",
                                on_delete=models.PROTECT)  # PROTECT не даст удалить товар, если он есть в заказах
    price = models.DecimalField(max_digits=10, decimal_places=0, verbose_name="Цена на момент покупки")
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.product.name} x {self.quantity}"