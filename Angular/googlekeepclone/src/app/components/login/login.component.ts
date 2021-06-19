import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _loginservice:LoginService ,private route: Router) { }

  // User object for Login
  userlogin:any = {}
  showError = false;

  ngOnInit() {
  }

  // Login Method ==> Subscription done
  Login(){
    this.route.navigate(['dashboard']);
    // console.log(this.userlogin)
    // this._loginservice.loginData(this.userlogin)
    // .subscribe( response => {
    //   console.log(response);
  
    //     this.route.navigate(['dashboard']);
     
      
    // },error => {
    //   this.showError = true;
    // })
  }
}
