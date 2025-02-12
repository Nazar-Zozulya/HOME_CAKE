from django.shortcuts import render
from mainapp.models import Products, ProductInCart
from django.http import HttpRequest
from .serializers import ProductInCartSerializer

from django.http import HttpRequest, JsonResponse
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
import json


@api_view(['POST'])
def add_to_cart(request: HttpRequest):
    if request.method == 'POST':
        data = request.data
        product = Products.objects.get(id=data['product_id'])
        session_key = request.session.session_key
        
        
        if ProductInCart.objects.get(product=product):
        # if ProductInCart.objects.check(product=product):
            return Response('sosal')
        # except:
        else:
            # data = request.data
            # print(session_id)
            # product = Products.objects.get(id=data['product_id'])
            
            ProductInCart.objects.create(session_key=session_key, product=product)
            # print('1231245235349689450689045980745897954790')
            # print(data)
            # ProductInCartSerializer.create(data)
            return Response('ok')
    
    
    

def main_func(request: HttpRequest):

    # response = render(request, 'main_app/main.html', context)

    all_products = Products.objects.all()
    new_products = Products.objects.all().order_by('-id')[:5]
    context = {'products':all_products,
               'new_products':new_products}

    return render(request, 'main_app/main.html', context)

class ProductInCartAPI(generics.ListAPIView):
    queryset = ProductInCart.objects.all()
    serializer_class = ProductInCartSerializer
    
    

# @api_view(['GET'])
# def api_root(request, format=None):
#     return Response({
#         # 'users': reverse('user-list', request=request, format=format),
#         'product-in-cart': reverse('product-in-cart', request=request, format=format)
#     })