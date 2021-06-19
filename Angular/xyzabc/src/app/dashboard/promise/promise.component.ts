import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor() { }
  id : string;
  name : String
  ngOnInit() {
  
  }
  data = { '1': 'apple', '2': 'Banana', '3': 'Mango' }


  async getDataFromDbWithAwait() {
    let p = await this.fetchIdData()
    console.log(p);
    let result = await this.fetchNameFromId()
    console.log(result[p]);
    this.name = result[p]

  }

  getDataFromDbWithCallback() {
    this.name = 'Loading...'
    this.fetchIdData().then(
      (Id) => {
        console.log(Id);

        this.fetchNameFromId()
        .then(
          data => 
          {
            console.log(data[Id])
            this.name = data[Id]
          }
        ).catch((err) => console.log(err))

  }).catch(err => console.log(err)
  )

}

fetchIdData(): Promise < string> {
  this.name = 'Loading...'
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.id)
    }, 2000);
  })
}

fetchNameFromId(): Promise < object > {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve({ '1': 'apple', '2': 'Banana', '3': 'Mango' })
    }, 2000);
  })
}

}
