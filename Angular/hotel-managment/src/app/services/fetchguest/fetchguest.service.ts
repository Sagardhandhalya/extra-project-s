import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchguestService {

  constructor() { }

  guestlist(){
    return [{
      "id": 1,
      "roomno": 338,
      "checkindate": "4/5/2020",
      "name": "Guillermo Paolozzi"
    }, {
      "id": 2,
      "roomno": 280,
      "checkindate": "4/2/2020",
      "name": "Dana Symper"
    }, {
      "id": 3,
      "roomno": 414,
      "checkindate": "3/5/2020",
      "name": "Tobi Rozzell"
    }, {
      "id": 4,
      "roomno": 102,
      "checkindate": "12/4/2020",
      "name": "Halley Vitte"
    }, {
      "id": 5,
      "roomno": 125,
      "checkindate": "6/17/2020",
      "name": "Theresita Blewitt"
    }, {
      "id": 6,
      "roomno": 425,
      "checkindate": "10/17/2020",
      "name": "Rozina Raikes"
    }, {
      "id": 7,
      "roomno": 188,
      "checkindate": "7/20/2020",
      "name": "Viviana McEvon"
    }, {
      "id": 8,
      "roomno": 139,
      "checkindate": "8/1/2020",
      "name": "Fenelia Paxton"
    }, {
      "id": 9,
      "roomno": 218,
      "checkindate": "1/19/2021",
      "name": "Demetris Pedlow"
    }, {
      "id": 10,
      "roomno": 275,
      "checkindate": "8/23/2020",
      "name": "Kati Crooke"
    }];
  }
}
