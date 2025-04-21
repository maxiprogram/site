import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { NgImageSliderModule } from 'ng-image-slider';
import { FaceWellComponent } from './face-well.component';


const routes: Routes = [
  {
    path: '',
    component: FaceWellComponent
  },
];

@NgModule({
  declarations: [
    FaceWellComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgImageSliderModule,
    MatCardModule
  ]
})
export class FaceWellModule { }
