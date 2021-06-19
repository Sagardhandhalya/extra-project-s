import { Component, OnInit } from '@angular/core';
import {interval } from 'rxjs'
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }



  //  secondsCounter = interval(1000)
  //  subscription = this.secondsCounter.pipe(map((val) => `my number is ${val}`)).pipe(map(n=> `hello`)).subscribe(n =>
  //    console.log(`It's been ${n + 1} seconds since subscribing!`));


}
