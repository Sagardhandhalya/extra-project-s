import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../UserNotes';

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(private http : HttpClient) { }

  
  addNewTodo(data  , note_id){
    data.note_id = note_id
    let newTodo:Todo = {...data , note_id : note_id }
      return this.http.post<Todo>('http://127.0.0.1:8000/api/todo/' , newTodo)
  }

  updateTodo(data , todo_id)
  {
    return this.http.patch<Todo>('http://127.0.0.1:8000/api/todo/'+todo_id+"/" , data)
  }

  deleteTodo(todo_id){
    return this.http.delete('http://127.0.0.1:8000/api/todo/'+todo_id+"/" )
  }

  


}
