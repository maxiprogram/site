import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatchThreeComponent } from './match-three.component';


const routes: Routes = [
  {
    path: '',
    component: MatchThreeComponent
  },
];

@NgModule({
  declarations: [
    MatchThreeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgImageSliderModule,
    MatCardModule
  ]
})
export class MatchThreeModule { }
