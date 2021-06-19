import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cropimage',
  templateUrl: './cropimage.component.html',
  styleUrls: ['./cropimage.component.css']
})
export class CropimageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('canva')
  canvas: ElementRef<HTMLCanvasElement>;
  
  inputImage;
  outputImage;
  maxsize = 100
  loadImage(e) {
    let reader = new FileReader();
    reader.onload = () => this.inputImage = reader.result
    reader.readAsDataURL(e.target.files[0]);
    
  };

  cropImage() {
 
    let ctx = this.canvas.nativeElement.getContext("2d");
  
    let start = () => {
      let cw, ch;
      cw = this.canvas.nativeElement.width = img.width;
      ch = this.canvas.nativeElement.height = img.height;
      
      if(img.width > this.maxsize && img.height > this.maxsize)
      {
      this.canvas.nativeElement.width = this.maxsize;
      this.canvas.nativeElement.height = this.maxsize;
      ctx.drawImage(img, 0, 0,this.maxsize,this.maxsize);
      ctx.globalCompositeOperation = 'destination-in';
      ctx.beginPath();
      ctx.arc(this.maxsize/2, this.maxsize/2, this.maxsize/2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      }

      else{

        ctx.drawImage(img, 0, 0);
        ctx.globalCompositeOperation = 'destination-in';
        ctx.beginPath();
        ctx.arc(cw/2, ch/2, ch/2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();

      }

      this.outputImage= this.canvas.nativeElement.toDataURL('image/png', 1.0);
      
    }

    var img = new Image();
    img.onload = start;
    img.src = this.inputImage;
  
  
  }




}



