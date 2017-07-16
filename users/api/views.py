from django.shortcuts import render

from ..models import UserProfile
from .serializers import (

    UserListSerializer,

)
# Create your views here.

from rest_framework.generics import (
    ListAPIView,
    )

class UserListAPIView(ListAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserListSerializer
