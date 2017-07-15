from django.shortcuts import render

from ..models import Company
from .serializers import (

    CompanyListSerializer,

)
# Create your views here.

from rest_framework.generics import (
    ListAPIView,
    )

class CompanyListAPIView(ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanyListSerializer
