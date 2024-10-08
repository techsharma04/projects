# Generated by Django 4.1.13 on 2024-08-14 23:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=200, unique=True)),
            ],
            options={
                'verbose_name': 'Genre',
                'verbose_name_plural': 'Genres',
            },
        ),
        migrations.CreateModel(
            name='Language',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=200, unique=True)),
            ],
            options={
                'verbose_name': 'Language',
                'verbose_name_plural': 'Languages',
            },
        ),
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=200, unique=True)),
            ],
            options={
                'verbose_name': 'Location',
                'verbose_name_plural': 'Locations',
            },
        ),
        migrations.CreateModel(
            name='Rating',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=200, unique=True)),
            ],
            options={
                'verbose_name': 'Rating',
                'verbose_name_plural': 'Ratings',
            },
        ),
        migrations.CreateModel(
            name='Seats',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('seat', models.CharField(max_length=50)),
                ('price', models.CharField(default=300, max_length=50)),
                ('status', models.CharField(default='vacant', max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='StarRating',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('star', models.CharField(max_length=200, unique=True)),
            ],
            options={
                'verbose_name': 'Star Rating',
                'verbose_name_plural': 'Star Ratings',
            },
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=100, unique=True)),
                ('password', models.CharField(max_length=100)),
            ],
            options={
                'verbose_name': 'User',
                'verbose_name_plural': 'Users',
            },
        ),
        migrations.CreateModel(
            name='Timing',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('time', models.CharField(max_length=50)),
                ('seats', models.ManyToManyField(related_name='movie_seat_timings', to='booking_app.seats')),
            ],
            options={
                'verbose_name': 'Timing',
                'verbose_name_plural': 'Timings',
            },
        ),
        migrations.CreateModel(
            name='Theatre',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=200)),
                ('cities', models.ManyToManyField(related_name='cinema_locations', to='booking_app.location')),
                ('timing', models.ManyToManyField(related_name='cinema_timings', to='booking_app.timing')),
            ],
            options={
                'verbose_name': 'Theatre',
                'verbose_name_plural': 'Theatres',
            },
        ),
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=200)),
                ('image', models.TextField()),
                ('release_date', models.DateField(auto_now_add=True)),
                ('time_length', models.CharField(default='2 hrs 50 mins', max_length=100)),
                ('visibility_status', models.CharField(max_length=100)),
                ('cinema', models.ManyToManyField(related_name='movie_theatres', to='booking_app.theatre')),
                ('genre', models.ManyToManyField(related_name='movie_genre', to='booking_app.genre')),
                ('language', models.ManyToManyField(related_name='movie_language', to='booking_app.language')),
                ('rating', models.ManyToManyField(related_name='movie_rating', to='booking_app.rating')),
                ('star_rating', models.ManyToManyField(related_name='movie_star_rating', to='booking_app.starrating')),
            ],
            options={
                'verbose_name': 'Movie',
                'verbose_name_plural': 'Movies',
            },
        ),
        migrations.AddField(
            model_name='location',
            name='movies',
            field=models.ManyToManyField(related_name='movies_locations', to='booking_app.movie'),
        ),
    ]
