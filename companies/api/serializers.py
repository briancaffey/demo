from rest_framework.serializers import ModelSerializer

from ..models import Company


class CompanyListSerializer(ModelSerializer):

    class Meta:
        model = Company
        fields = [
            'company_name',
            'company_url',
        ]
