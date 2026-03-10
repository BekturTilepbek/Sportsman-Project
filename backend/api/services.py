import os
import requests


def send_telegram_notification(order, order_items):
        bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
        chat_id = os.environ.get('TELEGRAM_CHAT_ID')

        if not bot_token or not chat_id:
            print("Telegram токен или chat_id не настроены в .env!")
            return

        # Красиво форматируем список товаров
        items_text = ""
        for item in order_items:
            items_text += f"— {item.product.name} ({item.quantity} шт.) - {item.price} сом\n"

        # Формируем текст сообщения (HTML разметка)

        message = (
            f"🚨 *НОВЫЙ ЗАКАЗ*\n\n"
            f"👤 *Клиент:* {order.first_name}\n"
            f"📞 *Телефон:* `{order.phone}`\n"
            f"🛒 *Товары:*\n{items_text}\n"
            f"💰 *Итого к оплате: {order.total_amount} сом*"
        )

        try:
            # Отправляем запрос в Telegram (таймаут 5 секунд, чтобы не вешать сервер)
            requests.post(
                f"https://api.telegram.org/bot{bot_token}/sendMessage",
                data={
                    "chat_id": chat_id,
                    "text": message,
                    "parse_mode": "Markdown"
                },
                timeout=5
            )
        except Exception as e:
            # Если ТГ упал или токен неверный, мы просто выводим ошибку в консоль.
            # Главное - не возвращать ошибку 500 фронтенду, ведь заказ в БД уже успешно создан!
            print(f"Ошибка отправки в Telegram: {e}")