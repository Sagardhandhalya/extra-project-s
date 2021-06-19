import { Component, Input, OnInit, } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { FetchusertaskService } from '../../services/fetchtask/fetchusertask.service';
import { TodoApiService } from 'src/app/services/todo/todo-api.service';
import { ITask } from 'src/app/UserNotes';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  constructor(private fb: FormBuilder, private fetch: FetchusertaskService, private todoapi: TodoApiService) { }


  // Component Communication
  // Parent Component ==> Homelayout Component
  // Child Component ==> Tasklist Component 
  @Input() taskList : ITask[] 

  ngOnInit() {

  }


  // variables declared
  ispined = false
  showComple = true;
  icon = "Hide";
  idoftask
  hoverval = false
  taskIdForModel:string;
  pinvar=false
  archivevar=false
  textvar=false
  displayvar="inline"

  togglecheckbox(t , ) {
    console.log(t);
    
    this.todoapi.updateTodo({'is_completed': !t.is_completed } ,t.id ).subscribe((data) => {
      console.log(data)
      if (data) {
        this.taskList = this.taskList.map((task) => task.id === data.note_id ?
          {
            ...task,
            todos : task.todos.map(
              (todo) => todo.id === t.id ? { ...todo, is_completed: !t.is_completed } : todo
              )
          } : task)
        console.log(data);
        
      }

    }, (err) => {
      console.log(err);
    })
  }
  
  //
  createDefaultForm(taskId:any){
  this.taskIdForModel = taskId;
  
  let currenttask
    for(let task of this.taskList){
      if(task.id===taskId)
      {
        currenttask = task;
      }
    }
 
    for (let todo of currenttask.todos){
      if(todo.content.length>0){
      this.todos.push(
        this.fb.group(
          {
            id : todo.id,
            content: [''],
            is_completed: [false]
          }
        ))
      }
    }
    this.newTask.patchValue(currenttask)
    this.idoftask = taskId
  }


  toggleCompleted() {
    this.showComple = !this.showComple;
    this.icon = this.showComple ? "Hide" : "Show"
  }

  // Toggles between pinned and unpinned notes
  togglepin()
  {
    this.newTask.patchValue({is_pinned:!this.newTask.get('is_pinned').value}) // patch used bz we cannot set it
    console.log(this.newTask.get('is_pinned').value)
    this.pinvar = !this.pinvar
  }

  // Toggles between archieved and unarchieved notes
  togglearchive()
  {
    this.newTask.patchValue({is_archived:!this.newTask.get('is_archived').value}) // patch used bz we cannot set it
    console.log(this.newTask.get('is_archived').value)
    this.archivevar = !this.archivevar
  }

  // Toggles between Text and Todos
  toggletext()
  {
    this.newTask.patchValue({is_text:!this.newTask.get('is_text').value}) // patch used bz we cannot set it
    console.log(this.newTask.get('is_text').value)
    this.textvar = !this.textvar

    if (this.displayvar == "none") {
      this.displayvar = "inline";
    }
    else {
      this.displayvar = "none";
    }

  }

  // Toggle between text and todos of particular card
  toggletextidwise(task_id, value ){
    
    this.fetch.UpdateUserTask(task_id , {'is_text': !value}).subscribe(
      (data) => {
        console.log(data);
        
        if(data) {
          this.taskList = this.taskList.map((task)=> task.id === task_id ?  {...task ,is_text : !value} : task )
        }
      },
      (err) => console.log(err) 
    )
  }


// Toggle between archieved and unarchieved notes of particular card
  togglearchiveidwise(task_id ,value){

    this.fetch.UpdateUserTask(task_id, { 'is_archived': !value }).subscribe(
      (data) => {
        console.log(data);

        if(data) {
          this.taskList = this.taskList.map((task)=> task.id === task_id ?  {...task ,is_archived : !value} : task )
        }
      },
      (err) => console.log(err)  
    ) 
   }

// Toggle between Pinned and Unpinned todos of particular card
  togglepinidwise(task_id , value){
    this.fetch.UpdateUserTask(task_id , {'is_pinned': !value}).subscribe(
      (data) => {
        console.log(data);

        if (data) {
          this.taskList = this.taskList.map((task) => task.id === task_id ? { ...task, is_pinned: !value } : task)

        }
      },
      (err) => console.log(err)

    )
  }
   
  // Delete particular card and its todos
  deletetask(task_id){
    this.fetch.deleteTask(task_id).subscribe(
      (data)=>{
            this.taskList = this.taskList.filter((item)=>item.id !== task_id)
      },
      (err) => console.log(err)     
    )
  }
  
  // Changes color of card
  changecolor(task_id,changedcolor)
  { 
    this.fetch.UpdateUserTask(task_id , {'color':changedcolor}).subscribe(
      (data) => {
        console.log(data);

        if (data) {
          this.taskList = this.taskList.map((task) => task.id === task_id ? { ...task, color: changedcolor } : task)
        }
      },
      (err) => console.log(err)     
    )

  }


  newTask = this.fb.group(
    {
      id: [''],
      reminder: ["12/12"],
      is_pinned: [false],
      is_text: [false],
      is_archived: [false],
      is_reminder_seen: [false],
      title: ['', Validators.required],
      color: ['#223344'],
      todos: this.fb.array([
        this.fb.group(
          {
            id: ['zeus12345'],
            content: [''],
            is_completed: [false]
          }
        )

      ])
    })

  // Get Details of Todos Array
  get todos() {
    return this.newTask.get('todos') as FormArray;
  }

 
  // Edit and Updates todos in modal
  updateTask(task_id:string ,data:ITask){
    
    data.todos.pop()
  
    // this.fetch.UpdateUserTask(this.idoftask,data)  
    this.fetch.updateCompleteTask(task_id, data).subscribe((data) => {
      if (data) {

        this.taskList = this.taskList.filter((item) => item.id !== task_id)
        this.taskList.push(data)
        
      }
    },
      (err) => console.log(err)

    )

  }

  closemodal() {
    while (this.todos.length != 1) {

      this.todos.removeAt(0)
    }
  }

// Add Todo and push it in todos array
  addTodo(i) {
    console.log(i);    
    if (this.todos.length === i+1)
    {
      this.todos.push(
        this.fb.group(
          {
            content: [''],
            is_completed: [false]
          }
        )
      )

    }
  }


  // from todo Api

  saveTodo(todo) {
    console.log(todo);
    if (todo.id == undefined) {

      console.log('post');
      if(todo.content){
      this.todoapi.addNewTodo(todo, this.taskIdForModel).subscribe(todo => {
        if (todo) {
          console.log(todo);
        }
      })
    }
    }
    else {
      console.log('patch');
      if(todo.content)
     { this.todoapi.updateTodo(todo, todo.id).subscribe(data => {
        if (data) {
          console.log(data);
        }
      })
    }

    }


  }

  deleteTodo(todo ,id )
  {
    this.todoapi.deleteTodo(todo.id).subscribe(
      data=>{
        
      
          if (this.todos.length >= 2) this.todos.removeAt(id)
          console.log(data);
          
    
      }
    )
  }



  toggleCheckBoxInModel(todo)
  {

    console.log(todo);
    
    
    this.todoapi.updateTodo({'is_completed' : !todo.is_completed} , todo.id).subscribe(
      data =>{
        console.log(data);
        
      }
    )
    
  }







}
