import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NgImageSliderModule } from 'ng-image-slider';
import { MatCardModule } from '@angular/material/card';
import { Mtbank30Component } from './mtbank30.component';


const routes: Routes = [
  {
    path: '',
    component: Mtbank30Component
  },
];


@NgModule({
  declarations: [
    Mtbank30Component
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgImageSliderModule,
    MatCardModule
  ]
})
export class Mtbank30Module { }
