from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .serializers import NoteSerializer
from rest_framework import status
from .models import Note
from authentication.models import User


@api_view(['GET'])
@permission_classes([IsAuthenticated]) 
def note_list(request):
    if request.method == 'GET':
        user_id = request.user.id
        user_object = User.objects.get(id=user_id)
        if user_object.is_teacher:
            notes = Note.objects.all()
            serializer = NoteSerializer(notes, many=True)
            return Response(serializer.data)
        return Response(status=status.HTTP_403_FORBIDDEN)

@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated]) 
def note_detail(request, pk):
    if request.method == 'GET':
        note = Note.objects.filter(user_id=request.user.id)
        serializer = NoteSerializer(note, many=True)
        return Response(serializer.data)
    if request.method == 'PUT':
        serializer = NoteSerializer(note, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)