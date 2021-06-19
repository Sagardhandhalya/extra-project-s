from rest_framework import serializers, status
from rest_framework.exceptions import PermissionDenied, NotAuthenticated
from rest_framework.response import Response
from .models import Note, Todo


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'

    def create(self, validated_data):
        todo = Todo.objects.create(**validated_data)
        todo.save()
        return todo

    def update(self, instance, validated_data):
        instance.content = validated_data.get('content', instance.content)
        instance.is_completed = validated_data.get('is_completed', instance.is_completed)
        instance.note_id = validated_data.get('note_id', instance.note_id)
        instance.save()
        return instance


class NoteSerializer(serializers.ModelSerializer):
    todos = TodoSerializer(many=True, required=False)
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Note
        fields = (
            'id', 'title', 'color', 'is_pinned', 'is_archived', 'is_text', 'reminder', 'is_reminder_seen', 'user',
            'todos')

    def create(self, validated_data):
        todo_list = validated_data.pop('todos')
        note = Note.objects.create(**validated_data)

        for todo in todo_list:
            Todo.objects.create(note_id=note, **todo)

        note.save()
        return note

    def update(self, instance, validated_data):
        todo_list = validated_data.pop('todos', None)
        instance.title = validated_data.get('title', instance.title)
        instance.color = validated_data.get('color', instance.color)
        instance.is_pinned = validated_data.get('is_pinned', instance.is_pinned)
        instance.is_archived = validated_data.get('is_archived', instance.is_archived)
        instance.is_text = validated_data.get('is_text', instance.is_text)
        instance.reminder = validated_data.get('reminder', instance.reminder)
        instance.is_reminder_seen = validated_data.get('is_reminder_seen', instance.is_reminder_seen)

        instance.save()
        return instance



    # def update(self, instance, validated_data):
    #     todo_list = validated_data.pop('todos', None)
    #     instance.title = validated_data.get('title', instance.title)
    #     instance.color = validated_data.get('color', instance.title)
    #     instance.is_pinned = validated_data.get('is_pinned', instance.is_pinned)
    #     instance.is_archived = validated_data.get('is_archived', instance.is_archived)
    #     instance.is_text = validated_data.get('is_text', instance.is_text)
    #     instance.is_reminder_seen = validated_data.get('is_reminder_seen', instance.is_reminder_seen)
    #
    #     if todo_list:
    #         Todo.objects.filter(note_id=instance).delete()
    #         print('hi..----')
    #         for todo in todo_list:
    #             todo_instance = Todo.objects.filter(content=todo.get('id'))
    #             if todo_instance:
    #                 todo_instance.content = todo.get('content')
    #                 todo_instance.is_completed = todo.get('is_completed')
    #                 todo_instance.note_id = todo.get('note_id')
    #                 todo_instance.save()
    #             else:
    #                 Todo.objects.create(note_id = instance , **todo)
    #     instance.save()
    #     return instance

    # if todo_list:
    #     Todo.objects.filter(note_id=instance).delete()
    #     for todo in todo_list:
    #         Todo.objects.create(note_id=instance, **todo)


class ReminderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Note
        fields = ('id', 'title', 'reminder')

