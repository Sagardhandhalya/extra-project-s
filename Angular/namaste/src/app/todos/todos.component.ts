import { Component, OnInit } from '@angular/core';
import  {FetchtodosService} from '../services/todos/fetchtodos.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos = [];
  constructor(private todo : FetchtodosService) { }

  ngOnInit() {

    this.todo.fetchtodoarray().subscribe(
      (data) => {

        console.log(data);
       console.log( typeof data);
       
      this.todos = Array.from(Object.keys(data), k=>data[k]);
      // this.todos = data;
      console.log(typeof this.todos);
      
         console.log(this.todos);
    
      }
    
    )
  }

  checked(t){   
    
    this.todos = this.todos.map((td) => td.id === t.id ? {...td , completed : !td.completed } : td)
   
    
    
  }
}
