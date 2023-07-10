import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { PageRoutingModule } from './page-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { DonateComponent } from './donate/donate.component';
import { SuggestionPageComponent } from './suggestion-page/suggestion-page.component';


@NgModule({
  declarations: [
    MainPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    DonateComponent,
    SuggestionPageComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    MainPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    DonateComponent,
    SuggestionPageComponent
  ]
})
export class PagesModule { }
