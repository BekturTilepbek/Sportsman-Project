from autoslug import AutoSlugField
from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255, verbose_name="Название")
    slug = AutoSlugField(populate_from='name', unique=True, always_update=True, default=None, verbose_name="URL")

    class Meta:
        verbose_name = "Категория"
        verbose_name_plural = "Категории"

    def __str__(self):
        return self.name