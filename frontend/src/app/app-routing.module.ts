import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListProjectComponent } from './components/list-project/list-project.component';
import { DetailProjectComponent } from './components/detail-project/detail-project.component';

const routes: Routes = [
  {
    path: "list",
    component: ListProjectComponent
  },
  {
    path: "list/detail/:xxx",
    component: DetailProjectComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
