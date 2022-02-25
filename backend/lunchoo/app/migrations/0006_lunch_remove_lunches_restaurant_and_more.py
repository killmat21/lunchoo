# Generated by Django 4.0.2 on 2022-02-25 01:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_alter_users_email'),
    ]

    operations = [
        migrations.CreateModel(
            name='Lunch',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('departure_date', models.DateTimeField()),
                ('book_limit_date', models.DateTimeField()),
                ('number_places', models.IntegerField()),
                ('place', models.CharField(max_length=255)),
                ('type', models.CharField(choices=[('To take away', 'To Go'), ('Eat in', 'Eat In'), ('Delivery', 'Delivery')], default='Eat in', max_length=255)),
            ],
        ),
        migrations.RemoveField(
            model_name='lunches',
            name='restaurant',
        ),
        migrations.RemoveField(
            model_name='reviews',
            name='restaurant',
        ),
        migrations.RemoveField(
            model_name='reviews',
            name='user',
        ),
        migrations.AddField(
            model_name='users',
            name='team_role',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.DeleteModel(
            name='Restaurants',
        ),
        migrations.DeleteModel(
            name='Reviews',
        ),
        migrations.AlterField(
            model_name='lunchsubcribers',
            name='lunch',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.lunch'),
        ),
        migrations.DeleteModel(
            name='Lunches',
        ),
    ]