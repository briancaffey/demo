from django.db import models

# Create your models here.

class Company:
	company_name = models.CharField(max_length=100, default='')
	company_url = models.URLField(max_length=400, blank=True)
    # 
    # class Meta:
    #     ordering = ('company_name')
