from django.shortcuts import render
from .models import *
# Create your views here.


def main_func(request):
    context = {'products': Products.objects.all()}
    # Products = Products.objects.all()
    # context['products'] = Products
    return render(request, 'main_app/main.html', context)