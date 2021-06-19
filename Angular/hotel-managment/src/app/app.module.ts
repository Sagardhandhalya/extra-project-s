import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AdminlayoutComponent } from './components/adminlayout/adminlayout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddguestformComponent } from './components/addguestform/addguestform.component';
import { GuesttableComponent } from './components/guesttable/guesttable.component';
import { ReactiveFormsModule } from '@angular/forms';
import {FetchguestService } from './services/fetchguest/fetchguest.service'
import { FormvalidationService } from './services/validation/formvalidation.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminlayoutComponent,
    HeaderComponent,
    SidebarComponent,
    AddguestformComponent,
    GuesttableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [FetchguestService , FormvalidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
