import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appBorderCardActive]"
})
export class BorderCardActiveDirective {
  constructor(private el: ElementRef) {
    // this.setBorder('#f5f5f5');
    // this.setHeight(180);
  }
}
