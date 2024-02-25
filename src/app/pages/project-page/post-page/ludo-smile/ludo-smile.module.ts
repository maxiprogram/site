import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatCardModule } from '@angular/material/card';
import { LudoSmileComponent } from './ludo-smile.component';



const routes: Routes = [
  {
    path: '',
    component: LudoSmileComponent
  },
];


@NgModule({
  declarations: [
    LudoSmileComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgImageSliderModule,
    MatCardModule
  ]
})
export class LudoSmileModule { }
