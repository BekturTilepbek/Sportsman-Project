from rest_framework.viewsets import ReadOnlyModelViewSet, ModelViewSet
from rest_framework.permissions import AllowAny

from webapp.models import Category, Product, Order
from .serializers import CategorySerializer, ProductSerializer, OrderSerializer


class CategoryViewSet(ReadOnlyModelViewSet):
    """
    Отдает список категорий.
    Доступ: GET /api/v1/categories/
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]
    lookup_field = 'slug'  # Чтобы искать по URL /categories/protein/


class ProductViewSet(ReadOnlyModelViewSet):
    """
    Отдает список товаров.
    Доступ: GET /api/v1/products/
    Поддерживает фильтрацию: GET /api/v1/products/?category=protein
    """
    queryset = Product.objects.all()  # Показываем только активные товары
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]
    lookup_field = 'slug'  # URL вида /products/mutant-mass/

    def get_queryset(self):
        # Кастомная фильтрация по категории
        queryset = super().get_queryset()
        category_slug = self.request.query_params.get('category')
        if category_slug:
            queryset = queryset.filter(category__slug=category_slug)
        return queryset


class OrderViewSet(ModelViewSet):
    """
    POST /api/v1/orders/
    Принимает заказ со списком товаров.
    """
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [AllowAny]
    http_method_names = ['post'] # Разрешаем ТОЛЬКО создавать заказы (без просмотра списка)