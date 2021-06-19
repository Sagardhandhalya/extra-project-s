
import { Component, OnInit, Output ,EventEmitter, Input } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { FetchusertaskService } from 'src/app/services/fetchtask/fetchusertask.service';
import {IReminder} from '../../UserNotes'



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth : LoginService , private fetch : FetchusertaskService) { }

  // Component Communication for Sidebar
  // ParentComponent ==> HomelayoutComponent 
  // ChildComponent ==> HeaderComponent
  
  @Output() sidebarToggleEvent  = new EventEmitter ();
  @Input() sidebarOn:boolean;

  // reminderList variable declared of Reminder Interface
  reminderList:IReminder[] = [
  ];

  ngOnInit() {

    //Fetch Details of Reminder on App Start
    //Subscription
    this.fetch.fetchReminder().subscribe( data => {console.log(data);
     this.reminderList = data }  , err => console.log(err) )

     setInterval(() => {
      this.refreshNotification();
    }, 10000);

  }

  // Refreshes and Updates for any reminders
  // Subscription
  refreshNotification(){
 this.fetch.fetchReminder().subscribe( data => {console.log(data);
     this.reminderList = data }  , err => console.log(err) )

  }

  // Removes Reminder
  // Subscription
  removeReminder(id){
    this.fetch.UpdateUserTask(id , {'reminder':null}).subscribe(
      (data)=>{
        if(data){
          this.reminderList = this.reminderList.filter((reminder) => reminder.id !== id)
        }
      },
    (err) => console.log(err)
    
    )
  }

  //Toggles Sidebar
  toggleSidebar(){ 
    this.sidebarToggleEvent.emit()
  }

  // User SignOut
  Logout(){
    this.auth.logOut()
  }

}

