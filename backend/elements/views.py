from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import ElementSerializer
from rest_framework import status
from .models import Element


@api_view(['GET'])
@permission_classes([IsAuthenticated]) 
def element_list(request):
    if request.method == 'GET':
        elements = Element.objects.all()
        serializer = ElementSerializer(elements, many=True)
        return Response(serializer.data)

