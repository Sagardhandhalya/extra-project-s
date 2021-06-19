import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  email:string = '';
  password : string = '';

  getformdata(data)
  {
    console.log(data);

    this.email = data.useremail;
    this.password = data.userpassword;
    window.location.href="http://localhost:4200/add"
    
  }
}
