from django import forms
from .models import Book

# Bu kodun sayesinde django book modeline göre otomatik form üretecek.
class BookForm(forms.ModelForm):
    class Meta:
        model = Book
        fields = ["title", "author", "description", "published_date"]
