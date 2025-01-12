from django.shortcuts import render
from mainapp.models import Products
from django.http import HttpRequest


def main_func(request: HttpRequest):
    all_products = Products.objects.all()
    new_products = Products.objects.all().order_by('-id')[:5]
    context = {'products':all_products,
               'new_products':new_products}

    response = render(request, 'main_app/main.html', context)


    if request.method == 'POST':
        #создаем cookie
        old_cart = request.COOKIES.get('cart')
        #получаем скрытый input который равняется id продукта
        new_product_id = request.POST.get('product_id')
        #создаем условиена добовление нового продукта в список
        if old_cart:
            new_product_id += ' ' + old_cart
        #задаем cookie
        response.set_cookie('cart', new_product_id)

    user_cart = request.COOKIES.get('cart')
    # response = render(request, 'main_app/main.html', context)
    if user_cart:
        #обрезаем cookie по пробелу
        product_id_list = user_cart.split(' ')
        # print(product_id_list)
        #проверяем обьект по id
        list_products = [Products.objects.get(id=i) for i in product_id_list]

        # print(list_products)
        context['cart'] = list_products
        print(context)
        response
    return response

# def cart_func(request: HttpRequest):
#     return response