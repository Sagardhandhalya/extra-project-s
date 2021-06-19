import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Day2Component } from './day2/day2.component';
import { Page404Component } from './page404/page404.component';
import { ParentComponent } from './parent/parent.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  

  {
    path: 'parent',
    component: ParentComponent
  },
 
  {
    path: 'day2',
    component: Day2Component
  },
  {
    path: 'rx',
    component: RxjsComponent
  },
  {
    path: '',
    redirectTo: 'parent',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: Page404Component
  },

  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class DashboardRoutingModule { }
