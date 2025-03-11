from rest_framework import serializers
from .models import Products

class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = ['id','image','name','price','composition','weight','kilocalories']


# class ProductsSerializer(serializers.Serializer):
    # class Meta:
        # model = Products
    #     # fields = ['image','name']
    # image = serializers.ImageField(required=False)
    # name = serializers.CharField(max_length=255)
    # price = serializers.IntegerField()
    # composition = serializers.CharField(max_length=255)
    # weight = serializers.IntegerField()
    # kilocalories = serializers.IntegerField()
    