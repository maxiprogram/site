import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
