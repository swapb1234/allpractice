import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appDct]'
})
export class DctDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color="Red";
   }
    
}
