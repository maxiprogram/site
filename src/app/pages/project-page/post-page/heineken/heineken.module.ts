import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeinekenComponent } from './heineken.component';
import { RouterModule, Routes } from '@angular/router';


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
    CommonModule
  ]
})
export class HeinekenModule { }
