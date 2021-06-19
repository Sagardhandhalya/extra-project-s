import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms'
import { FormvalidationService } from 'src/app/services/validation/formvalidation.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb : FormBuilder , private formvalidate : FormvalidationService) { }

  ngOnInit() {
  }

  admin = this.fb.group({
    email : ['' ,this.formvalidate.validateemail],
    password : ['',this.formvalidate.validatepassword],
  })



  login(data){
    console.log(data);
      
    }

    get email(){
      return this.admin.get('email')
    }


    get password()
    {
      return this.admin.get('password')
    }

}
