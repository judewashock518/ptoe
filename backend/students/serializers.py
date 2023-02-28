from rest_framework  import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['user_id', 'username', 'email', 'class_period', 'class_subject', 'total_elements_studied']