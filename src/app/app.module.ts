import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ZoomImageViewerComponent } from './zoom-image-viewer/zoom-image-viewer.component';
import { GetZoomPositionDirective } from './directives/get-zoom-position.directive';

@NgModule({
  declarations: [
    AppComponent,
    ZoomImageViewerComponent,
    GetZoomPositionDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
