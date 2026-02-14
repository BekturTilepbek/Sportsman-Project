from autoslug import AutoSlugField
from django.db import models


class Product(models.Model):
    category = models.ForeignKey("webapp.Category", related_name='products', on_delete=models.CASCADE, verbose_name="Категория")
    name = models.CharField(max_length=255, verbose_name="Название")
    slug = AutoSlugField(populate_from='name', unique=True, always_update=True, default=None, verbose_name="URL")
    description = models.TextField(blank=True, verbose_name="Описание")
    price = models.DecimalField(max_digits=10, decimal_places=0, verbose_name="Цена")
    image = models.ImageField(upload_to='products/', verbose_name="Фото")
    is_original = models.BooleanField(default=False, verbose_name="Оригинал")

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.pk}. {self.name}"

    # def get_absolute_url(self):
    #     return reverse("webapp:post_view", kwargs={"pk": self.pk})

    class Meta:
        verbose_name = "Товар"
        verbose_name_plural = "Товары"
