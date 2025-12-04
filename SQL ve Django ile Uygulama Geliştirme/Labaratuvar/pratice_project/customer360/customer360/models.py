from django.db import models

class Customer(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=20)
    address = models.CharField(max_length=200)
    social_media = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return str(self.id)

class Interaction(models.Model):
    CHANNEL_CHOICES = [
        ('phone', 'Telefon'),
        ('sms', 'SMS'),
        ('email', 'E-posta'),
        ('letter', 'Mektup'),
        ('social_media', 'Sosyal Medya'),
    ]
    DIRECTION_CHOICES = [
        ('inbound', 'Gelen'),
        ('outbound', 'Giden'),
    ]
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    channel = models.CharField(max_length=12, choices=CHANNEL_CHOICES)
    direction = models.CharField(max_length=12, choices=DIRECTION_CHOICES)
    interaction_date = models.DateField(auto_now_add=True)
    summary = models.TextField()