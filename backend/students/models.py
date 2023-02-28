from django.db import models
from authentication.models import User

# Create your models here.

class Student(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    username = models.CharField(max_length=255)
    email = models.EmailField(max_length=254)
    class_period = models.IntegerField()
    class_subject = models.CharField(max_length=255)
    total_elements_studied = models.IntegerField()
