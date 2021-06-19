import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  ngOnInit() {}

  admin = this.fb.group({
    email : ['' , Validators.required],
    password : ['',Validators.required],
  })

  login(data){
    console.log(data);
      
    }
}




