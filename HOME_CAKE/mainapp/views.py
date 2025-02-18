from django.shortcuts import render
from mainapp.models import Products, ProductInCart
from django.http import HttpRequest
from .serializers import ProductInCartSerializer

from django.http import HttpRequest, JsonResponse
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
# import json
from django.core.serializers import json


@api_view(['POST'])
def add_to_cart(request: HttpRequest):
    if request.method == 'POST':
        product_id = int(request.data['product_id'])
        session_key = request.session.session_key
        all_products = ProductInCart.objects.filter(session_key=session_key, product_id=product_id)
        print(all_products)
        if all_products.exists():
            ProductInCart.objects.get(session_key=session_key, product_id=product_id).delete()
            return Response('deleted')
        else:
            ProductInCart.objects.create(session_key = session_key, product_id=product_id)
            return Response('created')
            
        # return Response('ok')
    
    
@api_view(['GET'])
def get_products_in_cart(request: HttpRequest):
    session_key = request.session.session_key
    
    all_products = ProductInCart.objects.filter(session_key=session_key)
    
    json_serializer = json.Serializer()
    json_serialized = json_serializer.serialize(all_products)
    
    return JsonResponse(json_serialized, safe=False)
    
    

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