from decimal import ROUND_HALF_UP, Decimal

from autoslug import AutoSlugField
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from django.utils import timezone
from pytils.translit import slugify


class Product(models.Model):
    category = models.ForeignKey("webapp.Category", related_name='products', on_delete=models.CASCADE, verbose_name="Категория")
    name = models.CharField(max_length=255, verbose_name="Название")
    slug = AutoSlugField(populate_from='name', unique=True, always_update=True, slugify=slugify)
    description = models.TextField(blank=True, verbose_name="Описание")
    price = models.DecimalField(max_digits=10, decimal_places=0, verbose_name="Цена")
    image = models.ImageField(upload_to='products/', verbose_name="Фото")
    is_original = models.BooleanField(default=False, verbose_name="Оригинал")

    discount_percent = models.PositiveIntegerField(
        default=0,
        validators=[MinValueValidator(0), MaxValueValidator(100)],
        verbose_name="Скидка, %",
        help_text="От 0 до 100. 0 — скидки нет.",
    )
    discount_starts_at = models.DateTimeField(
        null=True, blank=True, verbose_name="Начало акции",
        help_text="Если не указано — скидка действует сразу.",
    )
    discount_ends_at = models.DateTimeField(
        null=True, blank=True, verbose_name="Конец акции",
        help_text="Если не указано — скидка бессрочна (пока не выключена).",
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.pk}. {self.name}"

    # def get_absolute_url(self):
    #     return reverse("webapp:post_view", kwargs={"pk": self.pk})

    @property
    def is_discount_active(self) -> bool:
        """Скидка активна, если процент > 0 и текущий момент попадает в окно дат (если оно задано)."""
        if not self.discount_percent:
            return False

        now = timezone.now()

        if self.discount_starts_at and now < self.discount_starts_at:
            return False
        if self.discount_ends_at and now > self.discount_ends_at:
            return False

        return True

    @property
    def final_price(self) -> Decimal:
        """Цена с учётом скидки (если она сейчас активна). Всегда используется для расчётов заказа."""
        if not self.is_discount_active:
            return self.price

        discount_multiplier = Decimal(100 - self.discount_percent) / Decimal(100)
        discounted = Decimal(self.price) * discount_multiplier

        # price хранится с 0 знаками после запятой (decimal_places=0), округляем так же
        return discounted.quantize(Decimal('1'), rounding=ROUND_HALF_UP)

    class Meta:
        verbose_name = "Товар"
        verbose_name_plural = "Товары"