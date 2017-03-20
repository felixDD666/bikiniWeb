from django.contrib import admin

from .models import *
from django.utils import timezone



class BikinisAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,               {'fields': ['Nombre', 'Colores']}),
        ('Fecha de Creacion', {'fields': ['Dia_registro']}),
    ]
    list_display = ('Nombre','Colores')
    list_filter = ['Dia_registro']
    search_fields = ['Nombre']


admin.site.register(Bikini, BikinisAdmin)