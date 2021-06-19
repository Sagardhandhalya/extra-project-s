import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule, MyRoute } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddtenantComponent } from './addtenant/addtenant.component';
import {TestService} from './services/test/test.service';
import { TemplateformComponent } from './templateform/templateform.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormField, MatFormFieldModule, MatHint, MatIcon, MatLabel, MatMenuModule, MatSidenavModule, MatGridListModule, MatIconModule, MatTreeModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodosComponent } from './todos/todos.component';
import { HttpClientModule } from '@angular/common/http';
import  {FetchtodosService} from './services/todos/fetchtodos.service';
import { AngularmaterialComponent } from './angularmaterial/angularmaterial.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ComplexformComponent } from './complexform/complexform.component';
import { LoginformComponent } from './loginform/loginform.component';
import { Test1234Component } from './test1234/test1234.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TreeComponent } from './tree/tree.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddtenantComponent,
    MyRoute,
    TemplateformComponent,
    TodosComponent,
    AngularmaterialComponent,
    ReactiveformComponent,
    ComplexformComponent,
    LoginformComponent,
    Test1234Component,
    TreeComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    LayoutModule,
    MatTreeModule,
  
   
  ],
  providers: [ TestService , FetchtodosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
