import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { ProjectPageRoutingModule } from './project-page-routing.module';
import { AllProjectComponent } from './component/all-project/all-project.component';
import { TabProjectComponent } from './tab-project/tab-project.component';



@NgModule({
  declarations: [
    TabProjectComponent,
    AllProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectPageRoutingModule,
    MatTabsModule,
    MatCardModule
  ]
})
export class ProjectPagetModule { }
