# Generated by Django 4.0.2 on 2022-02-25 10:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_rename_lunchsubcribers_lunchsubscribers'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='lunch',
            name='book_limit_date',
        ),
        migrations.RemoveField(
            model_name='lunch',
            name='type',
        ),
        migrations.AlterField(
            model_name='lunch',
            name='departure_date',
            field=models.TimeField(),
        ),
    ]
