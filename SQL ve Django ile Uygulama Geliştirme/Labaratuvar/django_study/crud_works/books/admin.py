from django.contrib import admin
from .models import Book

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "author", "published_date", "created_at")
    list_filter = ("published_date", "author")
    search_fields = ("title", "author")
    ordering = ("-id",)

    #list_display → tabloda hangi alanların görüneceği
    #list_filter → sağ tarafta filtre menüsü
    #search_fields → arama kutusu
    #ordering → sıralama
