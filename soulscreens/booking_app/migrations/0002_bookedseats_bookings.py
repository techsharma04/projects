# Generated by Django 4.1.13 on 2024-08-14 23:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booking_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='BookedSeats',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('seat', models.CharField(max_length=50)),
                ('price', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name': 'BookedSeat',
                'verbose_name_plural': 'BookedSeats',
            },
        ),
        migrations.CreateModel(
            name='Bookings',
            fields=[
                ('bookingId', models.AutoField(primary_key=True, serialize=False)),
                ('location', models.CharField(max_length=50)),
                ('theatre', models.CharField(max_length=50)),
                ('movie', models.CharField(max_length=200)),
                ('language', models.CharField(max_length=50)),
                ('date', models.CharField(max_length=100)),
                ('time', models.CharField(max_length=50)),
                ('amount_paid', models.CharField(max_length=100)),
                ('seats', models.ManyToManyField(related_name='booked_seats', to='booking_app.bookedseats')),
            ],
            options={
                'verbose_name': 'Booking',
                'verbose_name_plural': 'Bookings',
            },
        ),
    ]
