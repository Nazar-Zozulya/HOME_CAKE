from rest_framework import serializers
from .models import ProductInCart

class ProductInCartSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductInCart
        fields = ['id','session_key','product','count_product']
        
    # def create(validated_data):
    #     # print(validated_data)
    #     return ProductInCart.objects.create(**validated_data)