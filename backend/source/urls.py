from django.conf.urls.static import static
from django.conf import settings
from django.contrib import admin
from django.urls import path, include

from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('api.urls')),

# --- ДОКУМЕНТАЦИЯ API ---
    # 1. Скрытый путь, который генерирует саму схему в формате JSON/YAML
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    # 2. Красивый визуальный интерфейс Swagger, который читает схему выше
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
