# Generated by Django 5.0.6 on 2024-08-21 17:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='image',
            field=models.ImageField(default=True, null=True, upload_to='media'),
        ),
    ]
