# Generated by Django 4.0.2 on 2022-02-24 23:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_alter_users_options_remove_users_created_at_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lunches',
            name='type',
            field=models.CharField(choices=[('To take away', 'To Go'), ('Eat in', 'Eat In'), ('Delivery', 'Delivery')], default='Eat in', max_length=255),
        ),
    ]