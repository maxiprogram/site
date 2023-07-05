import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NgImageSliderModule } from 'ng-image-slider';
import { MatCardModule } from '@angular/material/card';

import { CardioComponent } from './cardio-component';


const routes: Routes = [
  {
    path: '',
    component: CardioComponent
  },
];

@NgModule({
  declarations: [
    CardioComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgImageSliderModule,
    MatCardModule
  ]
})
export class CardioModule { }
