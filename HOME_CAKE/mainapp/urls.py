from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('products_in_cart_list/', views.ProductInCartAPI.as_view()),
    # path('api-auth/', include('rest_framework.urls')),
    path('create/', views.add_to_cart),
    path('cart_products', views.get_products_in_cart),
]

urlpatterns = format_suffix_patterns(urlpatterns)