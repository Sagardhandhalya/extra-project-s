import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageResizerCropperModule } from 'image-resizer-cropper';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageResizerCropperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
