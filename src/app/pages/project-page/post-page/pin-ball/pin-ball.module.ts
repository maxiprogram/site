import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { NgImageSliderModule } from 'ng-image-slider';

import { PinBallComponent } from './pin-ball.component';


const routes: Routes = [
  {
    path: '',
    component: PinBallComponent
  },
];

@NgModule({
  declarations: [
    PinBallComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgImageSliderModule,
    MatCardModule
  ]
})
export class PinBallModule { }
