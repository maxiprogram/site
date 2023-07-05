import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatCardModule } from '@angular/material/card';

import { YellowheadrunComponent } from './yellowheadrun.component';


const routes: Routes = [
  {
    path: '',
    component: YellowheadrunComponent
  },
];


@NgModule({
  declarations: [
    YellowheadrunComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgImageSliderModule,
    MatCardModule
  ]
})
export class YellowheadrunModule { }
