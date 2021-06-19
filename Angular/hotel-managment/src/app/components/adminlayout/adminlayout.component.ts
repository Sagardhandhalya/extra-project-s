import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  styleUrls: ['./adminlayout.component.css']
})
export class AdminlayoutComponent implements OnInit {

  constructor( ) { }

  ngOnInit() {
  }

  sidebaropen : boolean = true;
  toggle(){
    this.sidebaropen = !this.sidebaropen;
  }


  

}
