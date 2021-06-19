import { Component, OnInit } from '@angular/core';
import {FormBuilder , Validators , FormArray } from '@angular/forms'
import { FormvalidationService } from 'src/app/services/validation/formvalidation.service';
@Component({
  selector: 'app-addguestform',
  templateUrl: './addguestform.component.html',
  styleUrls: ['./addguestform.component.css']
})
export class AddguestformComponent implements OnInit {

  constructor(private fb : FormBuilder , private formvalidation : FormvalidationService) { }

  ngOnInit() {
  }
log(d)
{
console.log(d);

}

  newtenant = this.fb.group({
    HeadDetails: this.fb.group({
      headName: ["" ,  this.formvalidation.validateName],
      headGender: ["" , Validators.required],
      headContactno: ["",this.formvalidation.validateContactno],
      checkinDate: ["select date",   Validators.compose([Validators.required , this.formvalidation.validateDate]) ],
      checkoutDate: ["select date",Validators.compose([Validators.required , this.formvalidation.validateDate])],
      address:['' , Validators.required],
      roomNo : ['',this.formvalidation.validateRoomno]
    }, {validators : this.formvalidation.validatedaterange}),
    SpouseDetails: this.fb.group({
      spouseName: ["",this.formvalidation.validateSpouseName],
      spouseGender: [""],
      spouseContactno: ["",this.formvalidation.validateSpouseContactno],
    }),
    ChildrenDetails: this.fb.array([
      
    ]),
  });
  get ChildrenDetails() {
    return this.newtenant.get('ChildrenDetails') as FormArray;
  }

  addChild(){
  
    
    this.ChildrenDetails.push(
      this.fb.group({
        childName: ["" , this.formvalidation.validateName],
        childGender: ["" ,Validators.required],
        childAge: ["", this.formvalidation.validateChildAge],
      }),
    )
  }

  removeChild(index){
    this.ChildrenDetails.removeAt(index)
  }

  submit(data){
    console.log(data);
    
  }


  // all the error getters .....


  get headName()
  {
    return this.newtenant.get('HeadDetails').get('headName');
  }

  get roomNO()
  {
    return this.newtenant.get('HeadDetails').get('roomNo')
  }

  get address()
  {
    return this.newtenant.get('HeadDetails').get('address')
  }

  get headContactNo()
  {
    return this.newtenant.get('HeadDetails').get('headContactno')
  }
 
  get checkinDate()
  {
    return this.newtenant.get('HeadDetails').get('checkinDate')
  }
  get checkoutDate()
  {
    return this.newtenant.get('HeadDetails').get('checkoutDate')
  }

 get headDetails()
 {
   return this.newtenant.get('HeadDetails')
 }

  

}
