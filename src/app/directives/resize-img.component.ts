import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appResizeImg]"
})
export class ResizeImgDirective {
  constructor(private el: ElementRef) {
    //       this.setHeight(170);
  }
}
