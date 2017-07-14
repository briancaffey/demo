from django.shortcuts import render

# Create your views here.
def company_list(request):
    return render(request, 'companies/companies.html')


def company_view(request, id):
    pass
