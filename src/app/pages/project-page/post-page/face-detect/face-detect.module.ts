import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NgImageSliderModule } from 'ng-image-slider';
import { MatCardModule } from '@angular/material/card';
import { FaceDetectComponent } from './face-detect.component';


const routes: Routes = [
  {
    path: '',
    component: FaceDetectComponent
  },
];


@NgModule({
  declarations: [
    FaceDetectComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgImageSliderModule,
    MatCardModule
  ]
})
export class FaceDetectModule { }
