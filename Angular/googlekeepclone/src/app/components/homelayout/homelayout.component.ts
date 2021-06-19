import { Component, OnInit } from '@angular/core';
import { FetchusertaskService } from 'src/app/services/fetchtask/fetchusertask.service';
import { ITask } from 'src/app/UserNotes';

@Component({
  selector: 'app-homelayout',
  templateUrl: './homelayout.component.html',
  styleUrls: ['./homelayout.component.css']
})
export class HomelayoutComponent implements OnInit {

  // FetchUserTaskService Injected
  constructor(private fetch : FetchusertaskService) { }

  // tasks variable declared of Tasks Interface
  tasks:ITask[]= []

  ngOnInit() {

    // Get all Tasks on start of App
    // Subscription
    this.fetch.getUserTasks().subscribe((data) =>  { console.log(data);
     this.tasks = data} , (err) => console.log(err))

  }

  // pushes new tasks into tasks array
  addNewTask(event)
  {
    console.log(event);
  
    this.tasks.push(event)
  }


  sidebaropen : boolean = true;
  
  toggle(){
    this.sidebaropen = !this.sidebaropen;
  }

}
