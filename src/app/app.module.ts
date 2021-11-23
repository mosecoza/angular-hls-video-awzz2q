import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { VideoJSComponent } from './video/video.component';
declare const videojs: any;

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,VideoJSComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

