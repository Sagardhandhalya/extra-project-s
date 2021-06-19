from django.urls import path
from rest_framework import routers

from .views import NoteViewSet, TodoViewSet, ReminderViewSet

router = routers.SimpleRouter()
router.register(r'note', NoteViewSet , basename="note_crud")
router.register(r'todo', TodoViewSet)
router.register(r'reminder', ReminderViewSet, basename="reminder")

urlpatterns = router.urls
