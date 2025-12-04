from django.db import models


class Book(models.Model):
    title = models.CharField(max_length=200, verbose_name="Kitap Adı")
    author = models.CharField(max_length=150, verbose_name="Yazar")
    description = models.TextField(blank=True, verbose_name="Açıklama")
    published_date = models.DateField(null=True, blank=True, verbose_name="Yayın Tarihi")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Oluşturulma Tarihi")

    def __str__(self):
        return f"{self.title} - {self.author}"

