from django.conf.urls import url
from .views import (
    UserListAPIView,
)

urlpatterns = [
    url(r'^api/$', UserListAPIView.as_view(), name='user_list'),
]
