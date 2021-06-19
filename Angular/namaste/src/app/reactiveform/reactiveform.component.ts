import { Component, OnInit } from '@angular/core';

import { FormControl , FormGroup , Validator, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent  {

  loginform = new FormGroup(
    {
      email : new FormControl('' ,[ Validators.required  ]),
      password : new FormControl('' ,[Validators.required]),

    }
  )
  
  
  constructor() { 
   

  }

  ngOnInit() {
  }

  

  customvalidate(fc : FormControl)
  {

    console.log(fc.value.length);
    console.log(this.loginform.invalid)

    
    
    if(fc.value.length < 8)
    {
    return {'password' : false}
    }
    else{
      return {'password' : true}
    }
    
  }

submit(data){

  console.log(this.loginform.value);
  // this.loginform.controls.email.setValue('aji land mere')
  this.loginform.patchValue({password : '9081606040'})
  
  if(this.loginform.controls.email.valid)
  {
    console.log(this.loginform.controls.email.valid);
    
  }
  else{
    console.log(data.value);
  }
  
  
}

}
