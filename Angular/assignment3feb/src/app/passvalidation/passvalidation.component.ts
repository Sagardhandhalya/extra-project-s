import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-passvalidation',
  templateUrl: './passvalidation.component.html',
  styleUrls: ['./passvalidation.component.css']
})
export class PassvalidationComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
  }

  passwords = this.fb.group({
    password: ['',[this.passwordValidator]],
    confirmPassword : ['',Validators.required,],
  },{validators :this.passwordGroupValidator})


  passwordGroupValidator(control : FormGroup){

    let password = control.get('password').value
    let confirmpassword = control.get('confirmPassword').value
    
    if( password !== confirmpassword){
      return {err : "Passwords not matched !!!"}
    }    
    return null;
  }
    passwordValidator(control : FormControl){
      let value = control.value;

      if(!value.match(/[a-z]/i))
      {
        return {err:'* password must contain at least one letter.'}
        
      }
      else if(!value.match(/[0-9]/))
      {
        return {err:"* password must contain at least one digit."}
      }
      else if(!value.match(/[!@#$%^&*()"?><]/))
      {
        return {err:"* contain at least one special char."}
      }
      else if(value.length < 8)
      {
        return {err:"* password must be at least 8 characters"}
      }
      return null;

    }

    getData(){
      alert('Data Saved..')
    }

    get password()
    {
      return this.passwords.get('password')
    }

    get confirmPassword(){
      return this.passwords.get('confirmPassword')
    }

    

}
