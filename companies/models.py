from django.db import models

# Create your models here.

class Company(models.Model):
	company_name = models.CharField(max_length=100, default='')
	company_url = models.URLField(max_length=400, blank=True)

	def __str__(self):
		return str(self.company_name)
