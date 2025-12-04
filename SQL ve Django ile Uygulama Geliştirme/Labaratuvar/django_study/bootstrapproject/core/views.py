from django.shortcuts import render


def home_view(request):
    # örnek veri
    cards = [
        {"title": "Kart 1", "text": "Bu bir Bootstrap kart örneği."},
        {"title": "Kart 2", "text": "Django ile Bootstrap kullanıyoruz."},
        {"title": "Kart 3", "text": "Bu layout tamamen Bootstrap ile."},
    ]
    return render(request, "core/home.html", {"cards": cards})
