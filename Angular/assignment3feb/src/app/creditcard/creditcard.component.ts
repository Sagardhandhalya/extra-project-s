import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, } from '@angular/forms';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
  }
  card= this.fb.group({

    creditCard: ['',this.validateCreditCard],
    
  })
  
  get creditCard(){
    return this.card.get('creditCard')
  }

  validateCreditCard(control : FormControl){
    console.log(control);
   let regex = /\d{4} *\d{4} *\d{4} *\d{4}/
   if(!control.value.match(regex))
   {
     return {err : 'credit card id not valid'}
   }
  }

}

