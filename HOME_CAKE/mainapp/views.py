from django.shortcuts import render
from mainapp.models import Products
from django.http import HttpRequest
# from .serializers import ProductInCartSerializer

from django.http import HttpRequest, JsonResponse, HttpResponse
from rest_framework import generics
from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from rest_framework.reverse import reverse
# import json
# from django.core.serializers import json


# @api_view(['POST'])
def add_to_cart(request: HttpRequest):
    response = HttpResponse('cart')
    # print(request.COOKIES['cart'])
    cartcookie = list(request.COOKIES['cart'])
    cartcookie.remove(' ')
    # cartcookie.split(' ')
    # pdro = list(cartcookie)
    # pdro.remove(' ')
    # print(cartcookie)
    list_products = [Products.objects.get(id=i) for i in cartcookie]
    # print(list_products)
    # print(list_products)
    
    
    # cart = request.body
    # print(cart)
    
    # if request.method == 'POST':
    #     #создаем cookie
    #     old_cart = request.COOKIES.get('cart')
    #     #получаем скрытый input который равняется id продукта
    #     new_product_id = request.POST('product_id')
    #     #создаем условиена добовление нового продукта в список
    #     if old_cart:
    #         new_product_id += ' ' + old_cart
    #     #задаем cookie
    #     response.set_cookie('cart', new_product_id)
    # return response
    return JsonResponse(list_products)
    
    

def main_func(request: HttpRequest):

    # response = render(request, 'main_app/main.html', context)

    all_products = Products.objects.all()
    new_products = Products.objects.all().order_by('-id')[:5]
    context = {'products':all_products,
               'new_products':new_products}

    return render(request, 'main_app/main.html', context)