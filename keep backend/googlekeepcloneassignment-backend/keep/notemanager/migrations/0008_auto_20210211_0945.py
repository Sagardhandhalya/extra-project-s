# Generated by Django 3.1.6 on 2021-02-11 09:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('notemanager', '0007_auto_20210211_0944'),
    ]

    operations = [
        migrations.RenameField(
            model_name='note',
            old_name='is_reminder_seer',
            new_name='is_reminder_seen',
        ),
    ]
