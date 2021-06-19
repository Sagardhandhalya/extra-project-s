import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/auth/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _loginservice:LoginService, private route: Router ) { }

  // User object for registration
   userregister:any = {};

  ngOnInit() {
  }

  // Registration Method ==> Subscription done
  Register(){     
    this._loginservice.registerData(this.userregister)
    .subscribe( response => {                             
      console.log(response);
      alert('Registration Successful')
      this.route.navigate(['./login']);
    }, error => {
      console.log(error);
      alert('Sorry Registration Unsuccessful')
    },
    () => {
      console.log('Something went wrong')
    });
  }

}
