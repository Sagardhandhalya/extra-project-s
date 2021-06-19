import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {IReminder, ITask} from '../../UserNotes'



@Injectable({
  providedIn: 'root'
})


export class FetchusertaskService {

  constructor(private http: HttpClient ) { }

   getUserTasks(): Observable<ITask[]> {
  
    return this.http.get<ITask[]>("http://127.0.0.1:8000/api/note/")  
    
}


  addUserTasks(task : ITask) {
   
    return this.http.post<ITask>("http://127.0.0.1:8000/api/note/" , task )

  }

  
  
  // Updates Tasks into API EndPoints by Patch Call
  UpdateUserTask(id:Number,data:object)
  {
      console.log(id)
    
      return this.http.patch<ITask>("http://127.0.0.1:8000/api/note/"+id+"/", data)
  }

  // Updates Completed Tasks to API EndPoints by Put Call
  updateCompleteTask(id , data)
  {
  
     return this.http.put<ITask>("http://127.0.0.1:8000/api/note/"+id+"/", data)
  }

  // Deletes particular tasks by Note Id
  deleteTask(id )
  {
    
 
     return this.http.delete("http://127.0.0.1:8000/api/note/"+id+"/")
  }

  // Get Reminder from API EndPoints
  fetchReminder(): Observable<IReminder[]>{

     return this.http.get<IReminder[]>("http://127.0.0.1:8000/api/reminder" )

  }

}
