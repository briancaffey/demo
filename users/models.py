from django.db import models
from django.contrib.auth.models import User

# Create your models here.
from django.db.models.signals import post_save


class UserProfile(models.Model):
	user = models.OneToOneField(User)
	first_name = models.CharField(max_length=100, default='')
	last_name = models.CharField(max_length=100, default='')
	job_title = models.CharField(max_length=200, default='')
	current_company = models.CharField(max_length=300)
	is_linkedin_connected = models.BooleanField(default=False)
	is_facebook_connected = models.BooleanField(default=False)
	bio = models.TextField()
	photo_url = models.URLField(max_length=400, blank=True)

	def __str__(self):
		return str(self.user.id)

def create_profile(sender, **kwargs):
	if kwargs['created']:
		user_profile = UserProfile.objects.create(user=kwargs['instance'])


post_save.connect(create_profile, sender=User)
