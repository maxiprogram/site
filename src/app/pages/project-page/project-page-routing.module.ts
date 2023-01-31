import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabProjectComponent } from './tab-project/tab-project.component';

const routes: Routes = [
  {
    path: '',
    component: TabProjectComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectPageRoutingModule { }
