import { Component, OnInit, Output ,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  
  
  @Output() sidebarToggleEvent  = new EventEmitter ();
  @Input() sidebarOn:boolean;
  ngOnInit() {
  }

  toggleSidebar(){
   
    this.sidebarToggleEvent.emit()
  }


  
 
}
