from rest_framework  import serializers
from .models import Element

class ElementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Element
        fields = ['id', 'atomic_number', 'symbol', 'name', 'group', 'atomic_mass', 'more_info']