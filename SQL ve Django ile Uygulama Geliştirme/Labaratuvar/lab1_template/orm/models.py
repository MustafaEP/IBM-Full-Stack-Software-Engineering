from django.db import models



# Define your first model from here:
class User(models.Model):
    #User's First Name
    first_name = models.CharField(null=False, max_length=30, default='Erhan')
    #User's Last Name
    last_name = models.CharField(null=False, max_length=30, default='Yıldız')
    #User's Date of Birth
    dob = models.DateField(null=True)