from django.views import View
from django.http import HttpResponse
from django.urls import reverse_lazy
from django.views.generic import (
    ListView, DetailView,
    CreateView, UpdateView, DeleteView
)
from .models import Article


class HomeView(View):
    def get(self, request):
        return HttpResponse("Class-Based View Çalışıyor!")

class ArticleListView(ListView):
    model = Article
    template_name = "articles/article_list.html"
    context_object_name = "articles"

class ArticleDetailView(DetailView):
    model = Article
    template_name = "articles/article_detail.html"

class ArticleCreateView(CreateView):
    model = Article
    fields = ["title", "content"]
    template_name = "articles/article_form.html"
    success_url = reverse_lazy("article_list")

class ArticleUpdateView(UpdateView):
    model = Article
    fields = ["title", "content"]
    template_name = "articles/article_form.html"
    success_url = reverse_lazy("article_list")

class ArticleDeleteView(DeleteView):
    model = Article
    template_name = "articles/article_confirm_delete.html"
    success_url = reverse_lazy("article_list")
