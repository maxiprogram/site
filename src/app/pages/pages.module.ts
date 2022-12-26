import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { PageRoutingModule } from './page-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutPageComponent } from './about-page/about-page.component';


@NgModule({
  declarations: [
    MainPageComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    MainPageComponent,
    AboutPageComponent
  ]
})
export class PagesModule { }
