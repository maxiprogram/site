import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { ProjectPageRoutingModule } from './project-page-routing.module';
import { AllProjectComponent } from './component/all-project/all-project.component';



@NgModule({
  declarations: [
    AllProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectPageRoutingModule,
    MatTabsModule
  ]
})
export class ProjectPagetModule { }
