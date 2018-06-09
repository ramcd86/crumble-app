import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgCircleProgressModule.forRoot({
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#000000',
      innerStrokeColor: '#FFFFFF',
      animationDuration: 300
    }),
    FormsModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
