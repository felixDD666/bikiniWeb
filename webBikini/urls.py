from django.conf.urls import url,include
from django.views.generic import TemplateView
from django.http import HttpResponse


from . import views

app_name = 'webBikini'
urlpatterns = [
    url(r'^$', views.principal, name='principal'),
    url(r'^pruebas/$', views.pruebas, name='pruebas'),
    
]
