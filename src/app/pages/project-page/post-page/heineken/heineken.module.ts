import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeinekenComponent } from './heineken.component';
import { NgImageSliderModule } from 'ng-image-slider';


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
    NgImageSliderModule
  ]
})
export class HeinekenModule { }
