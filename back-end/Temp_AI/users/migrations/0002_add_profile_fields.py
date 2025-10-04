# Manual migration to add missing profile fields

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='applicantprofile',
            name='certifications',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='applicantprofile',
            name='achievements',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='applicantprofile',
            name='professional_summary',
            field=models.TextField(blank=True),
        ),
    ]
