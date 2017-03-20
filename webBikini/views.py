from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.core.mail import send_mail, BadHeaderError

# Create your views here.
def principal(request):
    return render(request,'index.html',{})

def pruebas(request):
    return render(request,'pruebas.html',{})