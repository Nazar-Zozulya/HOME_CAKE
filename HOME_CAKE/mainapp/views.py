import json
from django.shortcuts import render
from collections import Counter
from mainapp.models import Products
from django.http import HttpRequest
from .serializers import ProductsSerializer
from django.http import HttpRequest, JsonResponse
from rest_framework import generics
from rest_framework.decorators import api_view
from django.forms.models import model_to_dict
from rest_framework.renderers import JSONRenderer


def products_in_cart(request: HttpRequest):
    # получаем куки
    cart_cookie = request.COOKIES['cart']
    
    # обрезаем куки и получает айдишники
    ids_list = list(cart_cookie.split(' ')) # [1,2,3,4]
    
    # обрабатываем список айдишников на количество повторенний
    ids_count = Counter(ids_list) # Counter({'3': 2, '4': 1, '2': 1})

    # получаем продукты по айдишникам которые мы получаем по ключам
    list_of_products = Products.objects.filter(id__in=ids_count.keys())
    
    # сериализируем ети продукты
    serialized_products = ProductsSerializer(list_of_products, many=True ).data
    
    # добавляем к каждому продукту информацию про его повторения
    for product in serialized_products:
        product['count'] = ids_count[str(product['id'])]

    # отправляем ето в json формате
    return JsonResponse(serialized_products, safe=False)


    
def main_func(request: HttpRequest):

    # response = render(request, 'main_app/main.html', context)

    all_products = Products.objects.all()
    new_products = Products.objects.all().order_by('-id')[:5]
    context = {'products':all_products,
               'new_products':new_products}

    return render(request, 'main_app/main.html', context)

class ProductsAPI(generics.ListAPIView):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer

def get_product_by_id(request: HttpRequest, id):
    product = Products.objects.filter(pk=id).first()
    print(product)
    serializer = ProductsSerializer(product)
    
    return JsonResponse(serializer.data, safe=False)