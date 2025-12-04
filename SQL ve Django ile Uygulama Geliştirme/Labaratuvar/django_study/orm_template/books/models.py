from django.db import models

class Book(models.Model):
    title = models.CharField(max_length=200)
    writer = models.CharField(max_length=200)
    year = models.IntegerField(null=True, blank=True)
    price = models.DecimalField(max_digits=6, decimal_places=2, null=True, blank=True)
        #max_digits, toplam rakam sayısı
        #decimal_places, virgülden sonraki hane sayısı
    created_at = models.DateTimeField(auto_created = True)
        #blank = True, form/ admin arayüzünde boş bırakılabilir.

    def __str__(self):
        #Admin Panelinde vs. gözükeck temsil
        return f"{self.title} - {self.writer}"