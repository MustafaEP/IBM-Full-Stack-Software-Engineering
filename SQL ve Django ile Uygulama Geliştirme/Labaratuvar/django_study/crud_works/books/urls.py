from django.urls import path
from . import views

urlpatterns = [
    path("", views.book_list, name="book_list"),                 # /books/
    path("create/", views.book_create, name="book_create"),      # /books/create/
    path("<int:pk>/update/", views.book_update, name="book_update"),  # /books/1/update/
    path("<int:pk>/delete/", views.book_delete, name="book_delete"),  # /books/1/delete/
]
