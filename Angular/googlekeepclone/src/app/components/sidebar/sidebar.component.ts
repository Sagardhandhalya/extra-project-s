
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

// Variable to provide content of Sidebar
 tabs =[
    {
      path:'',
      displayName : 'Notes'
    },
    {
      path:'',
      displayName : 'Reminders'
    },
    {
      path:'',
      displayName:'Bin'
    }
  ]

}

