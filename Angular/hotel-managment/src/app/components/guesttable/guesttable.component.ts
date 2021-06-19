import { Component, OnInit } from '@angular/core';
import { FetchguestService } from 'src/app/services/fetchguest/fetchguest.service';

@Component({
  selector: 'app-guesttable',
  templateUrl: './guesttable.component.html',
  styleUrls: ['./guesttable.component.css']
})
export class GuesttableComponent implements OnInit {

  constructor(private guestfetch : FetchguestService) { }

  ngOnInit() {
  }

  guests = this.guestfetch.guestlist()


}
