import datetime

from rest_framework.permissions import IsAuthenticated
from .serializers import NoteSerializer, TodoSerializer, ReminderSerializer
from rest_framework import viewsets, status
from .models import Note, Todo


class NoteViewSet(viewsets.ModelViewSet):
    serializer_class = NoteSerializer

    def get_queryset(self):
        """
        This view should return a list of all the purchases for
        the user as determined by the username portion of the URL.
        """
        user = self.request.user
        return Note.objects.filter(user=user)


class TodoViewSet(viewsets.ModelViewSet):

    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `username` query parameter in the URL.
        """
        user = self.request.user
        user_notes = Note.objects.filter(user=user)

        queryset = Todo.objects.filter(note_id__in=user_notes.values('id'))

        note_id = self.request.query_params.get('note_id', None)
        if note_id is not None:
            queryset = queryset.filter(note_id=note_id)
        return queryset

class ReminderViewSet(viewsets.ModelViewSet):
    serializer_class = ReminderSerializer

    def get_queryset(self):
        """
        This view should return a list of reminders.
        """
        user= self.request.user
        current_time = datetime.datetime.now()
        print(current_time)
        return Note.objects.filter(user=user, is_reminder_seen = False, reminder__lte=current_time)

