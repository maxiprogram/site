import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { NgImageSliderModule } from 'ng-image-slider';
import { LeapBirdComponent } from './leap-bird.component';


const routes: Routes = [
  {
    path: '',
    component: LeapBirdComponent
  },
];

@NgModule({
  declarations: [
    LeapBirdComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgImageSliderModule,
    MatCardModule
  ]
})
export class LeapBirdModule { }
