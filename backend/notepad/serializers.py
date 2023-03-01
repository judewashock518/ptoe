from rest_framework  import serializers
from .models import Note

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['user_id', 'id', 'heading', 'content', 'date', 'element_csv', 'total_elements_studied']
        depth = 1