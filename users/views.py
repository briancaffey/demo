from django.shortcuts import render, redirect

# Create your views here.
def home(request):
    return render(request, 'users/home.html', {})

def home_redirect(request):
    return redirect('users:home')
