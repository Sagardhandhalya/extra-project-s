import { HomelayoutComponent } from './../homelayout/homelayout.component';
import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { FetchusertaskService } from 'src/app/services/fetchtask/fetchusertask.service';
import { ITask } from 'src/app/UserNotes';


@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  // FormBuilder and FetUserTaskService Instance created
  constructor(private fb: FormBuilder ,private fetch : FetchusertaskService) { }

  // Component Communication
  // Parent Component ==> HomelayoutComponent
  // Child Component
  @Output() taskCreated = new EventEmitter<ITask>();

  ngOnInit() {

  }

  // variables declared
  ispined = false
  showform = true;
  showComple = true;
  icon = "Hide";
  pinvar=false
  archivevar=false
  textvar=false
  displayvar="inline"

  // FormBuilder format of newTask
  newTask = this.fb.group(
    {
      id:[''],
      reminder:[null],
      is_pinned:[false],
      is_text:[false],
      is_archived:[false],
      is_reminder_seen : [false],
      title: ['', Validators.required],
      color:['#223344'],
      todos: this.fb.array([
        this.fb.group(
          {
            id:[''],
            content: [''],
            is_completed: [false]
          }
        )
      ])
    })

  // This method emits to child component for display in dashboard
  // Subscription
  createTask(data){ 
 
    data.todos.pop();
    this.fetch.addUserTasks(data).subscribe((data) => {
      console.log(data)
        if(data){
          this.taskCreated.emit(data)

          // this.newTask.reset(
          //   this.newTask.value
          // )
          this.newTask.patchValue(
            {
              'title':'',
              'reminder':null,
              is_pinned:[false],
              is_text:[false],
              is_archived:[false],
              is_reminder_seen : [false],
              color:"#223344"
            }
            )
          while(this.todos.length != 1)
          {
            this.todos.removeAt(0)
          }
        }
      },
      (error) => console.log(error)
    )
  }


  toggleform(){
    this.showform = !this.showform;
  }
  
  // Toggle between incomplete and complete tasks
  // Based on it displays and hide checkbox
  toggleCompleted()
  {
    this.showComple = !this.showComple;
    this.icon = this.showComple ? "Hide" : "Show"
  }

  // Toggle between pinned and unpinned notes
  togglepin()
  {
    this.newTask.patchValue({is_pinned:!this.newTask.get('is_pinned').value}) // patch used bz we cannot set it
    console.log(this.newTask.get('is_pinned').value)
    this.pinvar = !this.pinvar
  }

  // Toggle between archieved and unarchieved notes
  togglearchive()
  {
    this.newTask.patchValue({is_archived:!this.newTask.get('is_archived').value}) // patch used bz we cannot set it
    console.log(this.newTask.get('is_archived').value)
    this.archivevar = !this.archivevar
  }

  // Toggle between text and todo list
  toggletext()
  {
    this.newTask.patchValue({is_text:!this.newTask.get('is_text').value}) // patch used bz we cannot set it
    console.log(this.newTask.get('is_text').value)
    this.textvar = !this.textvar
    // this.displayvar="block"
    if (this.displayvar == "none") {
      this.displayvar = "inline";
    }
    else {
      this.displayvar = "none";
    }
    // document.getElementsByClassName('checkmas').
  }

  // Get reminder from newTask
  get reminder() {
    return this.newTask.get('reminder');
  }

  // Delete Reminder
  clearReminder()
  {
    this.newTask.patchValue({'reminder':''})
  }

  // Get todos array of newTask
  get todos() {
    return this.newTask.get('todos') as FormArray;
  }

  // Delete Todo
  deleteTodo(id: number)
  {
    if(this.todos.length  >= 2) this.todos.removeAt(id)
  }

  // This method push todo in todos array
  addTodo(i) {
      if (this.todos.length === i+1)
      {
        this.todos.push(
          this.fb.group(
            {
              id :[''],
              content: [''],
              is_completed: [false]
            }
          )
        )
        
      }
    
    }

}


