import { Component, OnInit } from '@angular/core';
import {TestService} from '../services/test/test.service'
@Component({
  selector: 'app-addtenant',
  templateUrl: './addtenant.component.html',
  styleUrls: ['./addtenant.component.css']
})
export class AddtenantComponent implements OnInit {

  table ;
  constructor(private testservice  : TestService ) { }

  ngOnInit() {

    this.table = this.testservice.gettabledata();
    console.log(this.table);
    
  }

  name=true;

  toggletable(){
    this.name = !this.name;
  }

}
