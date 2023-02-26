from django.db import models

# Create your models here.

class Element(models.Model):
    atomic_number = models.IntegerField()
    symbol = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    group = models.IntegerField()
    atomic_mass = models.DecimalField(max_digits=8, decimal_places=2)
    more_info = models.CharField(max_length=255)
