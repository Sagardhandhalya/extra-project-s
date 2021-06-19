import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  gettabledata()
  {
    return [
      {name :"NAME" , email :"EMAIL"},
      {name :"Sagar" , email :"Sagar@sam"},
      {name :"Sagar" , email :"Sagar@sam"},
      {name :"Sagar" , email :"Sagar@sam"},
      {name :"Sagar" , email :"Sagar@sam"},
      {name :"Sagar" , email :"Sagar@sam"},
      {name :"Sagar" , email :"Sagar@sam"},

    ]
  }

  constructor() { }
}
