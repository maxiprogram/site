import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { DonateComponent } from './donate/donate.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SuggestionPageComponent } from './suggestion-page/suggestion-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'donate',
    component: DonateComponent
  },
  {
    path: 'suggestion',
    component: SuggestionPageComponent
  },
  {
    path: 'project/cardio',
    loadChildren: () => import('./project-page/post-page/cardio/cardio.module').then((m) => m.CardioModule)
  },
  {
    path: 'project/mergecamera',
    loadChildren: () => import('./project-page/post-page/merge-camera/merge-camera.module').then((m) => m.MergeCameraModule)
  },
  {
    path: 'project/pinball',
    loadChildren: () => import('./project-page/post-page/pin-ball/pin-ball.module').then((m) => m.PinBallModule)
  },
  {
    path: 'project/heineken',
    loadChildren: () => import('./project-page/post-page/heineken/heineken.module').then((m) => m.HeinekenModule)
  },
  {
    path: 'project/yellowheadrun',
    loadChildren: () => import('./project-page/post-page/yellowheadrun/yellowheadrun.module').then((m) => m.YellowheadrunModule)
  },
  {
    path: 'project',
    loadChildren: () => import('./project-page/project-page.module').then((m) => m.ProjectPagetModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
