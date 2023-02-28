from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .serializers import StudentSerializer
from rest_framework import status
from .models import Student
from authentication.models import User


@api_view(['GET'])
@permission_classes([IsAuthenticated]) 
def student_list(request):
    if request.method == 'GET':
        user_id = request.user.id
        user_object = User.objects.get(id=user_id)
        if user_object.is_teacher:
            students = Student.objects.all()
            serializer = StudentSerializer(students, many=True)
            return Response(serializer.data)
        return Response(status=status.HTTP_403_FORBIDDEN)

@api_view(['GET'])
@permission_classes([IsAuthenticated]) 
def student_detail(request):
    if request.method == 'GET':
        student = get_object_or_404(Student, user_id=request.user.id)
        serializer = StudentSerializer(student)
        return Response(serializer.data)
    

