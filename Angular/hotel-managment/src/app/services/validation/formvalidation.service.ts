import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { ElementFinder } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class FormvalidationService {

  constructor() { }

  validateemail(control: FormControl) {

    var re = /\S+@\S+\.\S+/;
    if (control.value === '') {

      return { err: '* Email is required fieild..' }
    
    }
    else if (!control.value.match(re)) {
      return { err: '* Enter valid Email abc@abc.abc' }
    }
    else if (control.value !== 'admin@admin.com') {
      return { err: '* Email is not matching ' }
    }
    else {
      return null;

    }

  }


  validatepassword(control: FormControl) {

    if (control.value === '') {
      return { err: '* Password is required fieild..' }
    }
    else if (control.value.length < 8) {
      return { err: '* password should contain at least 8 char' }
    }
    else if (control.value !== 'admin1234') {
      return { err: '* wrong password !!' }
    }
    else {
      return null;
    }
  }

  validateContactno(control: FormControl) {

    let phoneno = /^\d{10}$/;
    return control.value.match(phoneno) ? null : { err: '* Number have to be in form of 7865453789' }

  }


  validateRoomno(control: FormControl) {
    let roomno = /^[A-Z]\d{3}$/;
    return control.value.match(roomno) ? null : { err: '* Room number have to be in form of A123' }
  }


  validateName(control: FormControl) {
    return control.value.length >= 2 ? null : { err: '* Name should have to be at least 2 charecter . ' }
  }

  validateSpouseName(control: FormControl) {
    if (control.value.legth > 0) {
      return control.value.length >= 2 ? null : { err: '* Name should have to be at least 2 charecter . ' }
    }

    return null;


  }
  validateSpouseContactno(control: FormControl) {

    if (control.value.length > 0) {
      let phoneno = /^\d{10}$/;
      return control.value.match(phoneno) ? null : { err: '* Number have to be in form of 7865453789' }
    }

    return null;


  }
  validateChildAge(control: FormControl) {

    if (control.value <= 0 || control.value === '') {
      return { err: '* Invalid age' }
    }
    else {
      return null;
    }

  }


  validateDate(control: FormGroup) {

    let x = new Date(control.value)
    let y = new Date()

    return x.setHours(0, 0, 0, 0) < y.setHours(0, 0, 0, 0) ? { err: '* you can select date from past ' } : null;


  }

  // check in should have to less than check out data 

  validatedaterange(control: FormGroup) {




    const checkin = control.controls.checkinDate.value;
    const checkout = control.controls.checkoutDate.value;


    if (checkin > checkout) {
      return { err: '*check in date have to be less than checkout date' }
    }
    return null;

  }

}
