from __future__ import unicode_literals

from django.db import models
from django.utils import timezone

# Create your models here.
class Bikini(models.Model):
    Nombre = models.CharField(max_length=200)
    Colores = models.CharField(max_length=200)
    Dia_registro = models.DateTimeField('Fecha')
    def __str__(self):
        return self.Nombre 