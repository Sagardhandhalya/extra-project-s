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

 tabs =[
    {
      path:'/admin/guesttable',
      displayName : 'Dashboard'
    },
    {
      path:'/admin/addguest',
      displayName : 'Add Tenant'
    },
    {
      path:'',
      displayName:'History'
    }
  ]

}
