import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

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
    CommonModule
  ]
})
export class YellowheadrunModule { }
