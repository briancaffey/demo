from django.conf.urls import url
from .views import (
    UserListAPIView,
    UserDetailAPIView
)

urlpatterns = [
    url(r'^(?P<pk>.+)/api/$', UserDetailAPIView.as_view(), name='user_detail'),
    url(r'^api/$', UserListAPIView.as_view(), name='user_list'),

]
