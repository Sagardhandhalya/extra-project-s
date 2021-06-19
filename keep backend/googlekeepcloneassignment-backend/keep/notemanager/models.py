from django.db import models
from django.contrib.auth.models import User
import datetime
from rest_framework import serializers

from django.db.models import CheckConstraint


class Note(models.Model):
    title = models.CharField(max_length=50)
    color = models.CharField(max_length=50)
    is_pinned = models.BooleanField(default=False)
    is_archived = models.BooleanField(default=False)
    is_text = models.BooleanField(default=False)
    reminder = models.DateTimeField(default=None, null=True)
    is_reminder_seen = models.BooleanField(default=False)
    user = models.ForeignKey(User, related_name='notes', on_delete=models.CASCADE, default=None, null=True)

    class Meta:
        db_table = 'notes'
        managed = True


class Todo(models.Model):
    content = models.CharField(max_length=50)
    is_completed = models.BooleanField(default=False)
    note_id = models.ForeignKey(Note, related_name='todos', on_delete=models.CASCADE, default=None, null=True)

    class Meta:
        db_table = 'todos'
        managed = True
        verbose_name = 'Todo'
        verbose_name_plural = 'Todos'
