import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProjectComponent } from './component/all-project/all-project.component';
import { TabProjectComponent } from './tab-project/tab-project.component';

const routes: Routes = [
  {
    path: '',
    component: TabProjectComponent
  },
  {
    path: 'all',
    component: AllProjectComponent
  },
  {
    path: 'software',
    component: TabProjectComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectPageRoutingModule { }
