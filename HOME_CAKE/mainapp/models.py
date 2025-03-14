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