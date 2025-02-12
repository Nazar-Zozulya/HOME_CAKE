from django.db import models
# import json
# Create your models here.

class Products(models.Model):
    image = models.ImageField(upload_to=('media'), null=True, default=True)
    name = models.CharField(max_length=255)
    price = models.IntegerField()
    composition = models.CharField(max_length=255)
    weight = models.IntegerField()
    kilocalories = models.IntegerField()

class ProductInCart(models.Model):
    session_key = models.CharField(max_length=32)
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    count_product = models.IntegerField(default=1)