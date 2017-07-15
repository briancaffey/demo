from django.conf.urls import url
from .views import (
    CompanyListAPIView,
)

urlpatterns = [
    url(r'^api/$', CompanyListAPIView.as_view(), name='company_list'),
]
