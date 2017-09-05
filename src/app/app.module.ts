import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WorkerAppModule } from '@angular/platform-webworker';

import { AppComponent } from './app.component';
import { CommonModule } from './common/common.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // BrowserModule,
    WorkerAppModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
