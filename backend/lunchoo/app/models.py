from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class Users(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    hashed_password = models.CharField(max_length=255)
    photo = models.URLField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)


class Restaurants(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)


class Lunches(models.Model):
    class LunchType(models.TextChoices):
        TO_GO = 'To take away'
        EAT_IN = 'Eat in'

    id = models.AutoField(primary_key=True)
    departure_date = models.DateTimeField()
    book_limit_date = models.DateTimeField()
    restaurant = models.ForeignKey(Restaurants, on_delete=models.CASCADE)
    type = models.CharField(
        max_length=255,
        choices=LunchType.choices,
        default=LunchType.EAT_IN,
    )


class LunchSubcribers(models.Model):
    lunch = models.ForeignKey(Lunches, on_delete=models.CASCADE)
    user = models.ForeignKey(Users, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('lunch', 'user',)


class Reviews(models.Model):
    id = models.AutoField(primary_key=True)
    restaurant = models.ForeignKey(Restaurants, on_delete=models.CASCADE)
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    note = models.IntegerField(validators=[
        MaxValueValidator(5),
        MinValueValidator(1)
    ])
    comment = models.TextField()