import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ResizeImgDirective } from "./directives/resize-img.component";
import { BorderCardActiveDirective } from "./directives/border-card-active.directive";

@NgModule({
  declarations: [AppComponent, ResizeImgDirective, BorderCardActiveDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
