# Generated by Django 4.0.2 on 2022-02-24 21:57

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Restaurants',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('address', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=255)),
                ('hashed_password', models.CharField(max_length=255)),
                ('photo', models.URLField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Reviews',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('note', models.IntegerField(validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(1)])),
                ('comment', models.TextField()),
                ('restaurant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.restaurants')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.users')),
            ],
        ),
        migrations.CreateModel(
            name='Lunches',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('departure_date', models.DateTimeField()),
                ('book_limit_date', models.DateTimeField()),
                ('type', models.CharField(choices=[('To take away', 'To Go'), ('Eat in', 'Eat In')], default='Eat in', max_length=255)),
                ('restaurant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.restaurants')),
            ],
        ),
        migrations.CreateModel(
            name='LunchSubcribers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lunch', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.lunches')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.users')),
            ],
            options={
                'unique_together': {('lunch', 'user')},
            },
        ),
    ]
