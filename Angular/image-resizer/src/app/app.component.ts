import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'image-resizer';
  fileReceived: any;
  constructor() {}

  ngOnInit() {}

  receiveFile(event: any) {
    this.fileReceived = event;
  }

  receiveError(event: any) {
    console.log(event);
  }

  receiveCroppedImage(event: any){
    console.log(event);
  }
}
