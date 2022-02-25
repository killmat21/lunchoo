from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import AbstractUser

class Users(models.Model):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    team_role = models.CharField(max_length=255, null=True)
    photo = models.URLField(max_length=255)

    def __str__(self):
        return self.email


class Lunch(models.Model):
    class LunchType(models.TextChoices):
        TO_GO = 'To take away'
        EAT_IN = 'Eat in'
        DELIVERY = 'Delivery'

    id = models.AutoField(primary_key=True)
    departure_date = models.TimeField()
    number_places = models.IntegerField()
    place = models.CharField(max_length=255)


class LunchSubscribers(models.Model):
    lunch = models.ForeignKey(Lunch, on_delete=models.CASCADE)
    user = models.ForeignKey(Users, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('lunch', 'user',)
