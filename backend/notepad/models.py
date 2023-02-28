from django.db import models
from authentication.models import User

# Create your models here.

class Note(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    heading = models.CharField(max_length=255)
    content = models.TextField()
    date = models.DateField()
    element_csv = models.CharField(max_length=255)
    total_elements_studied = models.IntegerField()