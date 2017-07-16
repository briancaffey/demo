from django.shortcuts import render

from ..models import UserProfile
from .serializers import (
    UserListSerializer,
    UserSerializer,
)

from django.contrib.auth.models import User

from rest_framework.response import Response
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    )

class UserListAPIView(ListAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserListSerializer


class UserDetailAPIView(RetrieveAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserSerializer

    def get_object(self, pk=None):
        queryset = User.objects.get(pk=self.kwargs['pk'])
        user_id = queryset.id
        user_profile = UserProfile.objects.filter(user=user_id)
        obj = user_profile.first()
        return obj
