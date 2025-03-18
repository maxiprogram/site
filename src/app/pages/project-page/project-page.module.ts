import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ProjectPageRoutingModule } from './project-page-routing.module';
import { TabProjectComponent } from './tab-project/tab-project.component';
import { AllProjectComponent } from './component/all-project/all-project.component';
import { MobileProjectComponent } from './component/mobile-project/mobile-project.component';
import { GameProjectComponent } from './component/game-project/game-project.component';
import { SoftwareProjectComponent } from './component/software-project/software-project.component';
import { DemoProjectComponent } from './component/demo-project/demo-project.component';



@NgModule({
  declarations: [
    TabProjectComponent,
    AllProjectComponent,
    MobileProjectComponent,
    GameProjectComponent,
    SoftwareProjectComponent,
    DemoProjectComponent,
  ],
  imports: [
    CommonModule,
    ProjectPageRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ProjectPagetModule { }
