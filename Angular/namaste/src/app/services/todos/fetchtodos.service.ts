import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FetchtodosService {

  constructor(private http: HttpClient ) { }

  fetchtodoarray(){
  
  return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
