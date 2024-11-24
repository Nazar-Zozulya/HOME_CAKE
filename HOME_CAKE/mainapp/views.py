from django.shortcuts import render
from .models import *
# import numpy as np
# Create your views here.


def main_func(request):
    all_products = Products.objects.all()
    new_products = Products.objects.all().order_by('-id')[:5]
    context = {'products':all_products,
               'new_products':new_products}
    # new_products = Products.objects.filter(id=all_products)
    # Products = Products.objects.all()
    # context['products'] = Products
    return render(request, 'main_app/main.html', context)