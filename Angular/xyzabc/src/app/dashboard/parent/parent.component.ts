import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  textValue = ""

  inputChangeFromChild(e)
  {
      this.textValue = e;
  }

}


// difference : child vs structure
// atribute ... change text
// default routing 