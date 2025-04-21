import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { NgImageSliderModule } from 'ng-image-slider';
import { FaceMirrorComponent } from './face-mirror.component';


const routes: Routes = [
  {
    path: '',
    component: FaceMirrorComponent
  },
];

@NgModule({
  declarations: [
    FaceMirrorComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgImageSliderModule,
    MatCardModule
  ]
})
export class FaceMirrorModule { }
