import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NgImageSliderModule } from 'ng-image-slider';
import { MatCardModule } from '@angular/material/card';
import { AiArtComponent } from './ai-art.component';


const routes: Routes = [
  {
    path: '',
    component: AiArtComponent
  },
];


@NgModule({
  declarations: [
    AiArtComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgImageSliderModule,
    MatCardModule
  ]
})
export class AiArtModule { }
