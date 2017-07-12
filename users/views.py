from django.shortcuts import render, redirect
from .models import UserProfile
from django.contrib.auth.models import User

# Create your views here.
def home(request):
    users = User.objects.all()
    context = {
        'users':users
    }
    return render(request, 'users/home.html', context)

def home_redirect(request):
    return redirect('users:home')

def profile_view(request, id):
    person = User.objects.get(id=id)
    context = {
        'user':person,
    }
    return render(request, 'users/user.html', context)
