from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from ..models import UserProfile


class UserListSerializer(ModelSerializer):

    class Meta:
        model = UserProfile
        fields = [
            'user',
            'first_name',
            'last_name',
            'job_title',
            'current_company',
            'is_linkedin_connected',
            'is_facebook_connected',
            'bio',
            'photo_url',
            'user_profile_url',
        ]

class UserSerializer(ModelSerializer):

    class Meta:
        model = UserProfile
        fields = [
            'user',
            'first_name',
            'last_name',
            'job_title',
            'current_company',
            'is_linkedin_connected',
            'is_facebook_connected',
            'bio',
            'photo_url',
            'user_profile_url',
        ]
