import { Directive , ElementRef , HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChageTextDirective {

  text;
  constructor(private el : ElementRef) { 

  }


  @HostListener('mouseenter') chageit(){
    this.text = this.el.nativeElement.innerHTML 

    this.el.nativeElement.innerHTML = "Text changed !!!!!"
  }

  @HostListener('mouseleave') backToNormal(){
    this.el.nativeElement.innerHTML = this.text
  }

}
