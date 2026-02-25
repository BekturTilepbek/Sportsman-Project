from rest_framework import serializers
from webapp.models import Order, OrderItem, Product
from .products import ProductSerializer


class OrderItemInputSerializer(serializers.Serializer):
    """
    Вспомогательный сериализатор для ВХОДЯЩИХ данных (то, что шлет фронт)
    """
    product_id = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all())
    quantity = serializers.IntegerField(min_value=1)

class OrderItemSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)

    class Meta:
        model = OrderItem
        fields = ['product', 'quantity', 'price']

class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemInputSerializer(many=True, write_only=True)

    # Поле для чтения: тут мы покажем красивые данные после создания
    order_items = OrderItemSerializer(source='items', many=True, read_only=True)

    class Meta:
        model = Order
        fields = [
            'id', 'first_name', 'phone', 'email', 'total_amount', 'created_at', 'items',
            'items',  # <-- Входные данные (write_only)
            'order_items'  # <-- Выходные данные (read_only)
        ]
        read_only_fields = ['total_amount', 'created_at']

    def create(self, validated_data):
        # 1. "Вырезаем" товары из данных, так как их нельзя сохранить напрямую в модель Order
        print(validated_data)
        items_data = validated_data.pop('items')


        # 2. Считаем общую сумму заказа на сервере (чтобы фронт не обманул с ценой)
        total_amount = 0
        for item in items_data:
            product = item['product_id']
            quantity = item['quantity']
            total_amount += product.price * quantity

        # 3. Создаем сам заказ
        order = Order.objects.create(total_amount=total_amount, **validated_data)

        # 4. Создаем позиции заказа (OrderItem)
        order_items_objs = []
        for item in items_data:
            product = item['product_id']
            quantity = item['quantity']

            order_items_objs.append(OrderItem(
                order=order,
                product=product,
                price=product.price,  # Фиксируем цену на момент покупки
                quantity=quantity
            ))

        OrderItem.objects.bulk_create(order_items_objs)

        return order