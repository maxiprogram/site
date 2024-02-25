import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NgImageSliderModule } from 'ng-image-slider';
import { MatCardModule } from '@angular/material/card';
import { NeuroBartenderComponent } from './neuro-bartender.component';


const routes: Routes = [
  {
    path: '',
    component: NeuroBartenderComponent
  },
];


@NgModule({
  declarations: [
    NeuroBartenderComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgImageSliderModule,
    MatCardModule
  ]
})
export class NeuroBartenderModule { }
