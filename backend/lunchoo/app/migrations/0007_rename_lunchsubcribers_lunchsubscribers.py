# Generated by Django 4.0.2 on 2022-02-25 09:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_lunch_remove_lunches_restaurant_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='LunchSubcribers',
            new_name='LunchSubscribers',
        ),
    ]
