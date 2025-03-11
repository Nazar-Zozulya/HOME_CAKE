from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('products-api/', views.ProductsAPI.as_view()),
    path('products/', views.products_in_cart),
    path('product-api/<int:id>', views.get_product_by_id)
]

urlpatterns = format_suffix_patterns(urlpatterns)