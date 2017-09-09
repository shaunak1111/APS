import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloApsComponent } from './hello-aps/hello-aps.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HelloApsComponent],
  exports: [HelloApsComponent]
})
export class SharedModule { }
