# Generated by Django 3.1.6 on 2021-02-11 09:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notemanager', '0008_auto_20210211_0945'),
    ]

    operations = [
        migrations.AlterField(
            model_name='note',
            name='reminder',
            field=models.DateTimeField(default=None, null=True),
        ),
    ]
