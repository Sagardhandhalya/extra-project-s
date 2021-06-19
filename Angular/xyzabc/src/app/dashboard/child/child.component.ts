import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() textValue;
  @Output() childTextChange = new EventEmitter<string>()


  constructor() { }

  ngOnInit() {
  }



  setText()
  { 
    this.childTextChange.emit(this.textValue)
  }


}
