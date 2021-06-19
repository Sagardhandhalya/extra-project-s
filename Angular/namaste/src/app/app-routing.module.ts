import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtenantComponent } from './addtenant/addtenant.component';
import { AngularmaterialComponent } from './angularmaterial/angularmaterial.component';
import { ComplexformComponent } from './complexform/complexform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginformComponent } from './loginform/loginform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { Test1234Component } from './test1234/test1234.component';
import { TodosComponent } from './todos/todos.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"add",
    component:AddtenantComponent
  },
  {
    path:"reactiveform",
    component:ReactiveformComponent
  },
  {
    path:"templateform",
    component:TemplateformComponent
  },
  {
    path:"todos",
    component:TodosComponent
  },
  {
    path:"angularmaterial",
    component:AngularmaterialComponent
  },
  {
    path:"complexform",
    component:ComplexformComponent
  },
  {
    path:"loginform",
    component:LoginformComponent
  },
  {
    path:'dashboardauto',
    component:Test1234Component
  },
  {
    path:'tree',
    component:TreeComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule { }

export const MyRoute = [AddtenantComponent , DashboardComponent , TemplateformComponent , TodosComponent] 
