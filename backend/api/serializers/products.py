from rest_framework import serializers
from webapp.models import Category, Product

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug']


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)

    # Вычисляемые поля — фронту не нужно ничего считать самому
    final_price = serializers.DecimalField(max_digits=10, decimal_places=0, read_only=True)
    is_discount_active = serializers.BooleanField(read_only=True)

    class Meta:
        model = Product
        fields = [
            'id', 'category', 'name', 'slug', 'description',
            'price', 'image', 'is_original', 'created_at',
            'discount_percent', 'discount_starts_at', 'discount_ends_at',
            'final_price', 'is_discount_active',
        ]
        read_only_fields = ('id', 'created_at', 'final_price', 'is_discount_active')