import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NgImageSliderModule } from 'ng-image-slider';
import { MatCardModule } from '@angular/material/card';

import { HeinekenComponent } from './heineken.component';


const routes: Routes = [
  {
    path: '',
    component: HeinekenComponent
  },
];


@NgModule({
  declarations: [
    HeinekenComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgImageSliderModule,
    MatCardModule
  ]
})
export class HeinekenModule { }
