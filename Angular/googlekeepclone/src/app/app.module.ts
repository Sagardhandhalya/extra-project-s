import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { HomelayoutComponent } from './components/homelayout/homelayout.component';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginService } from './services/auth/login.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './services/auth/auth.guard';
import { LoginGuard } from './services/auth/login.guard';
import { FetchusertaskService } from './services/fetchtask/fetchusertask.service';
import { AuthInterceptor } from './http-interceptors/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HomelayoutComponent,
    AddtaskComponent,
    TasklistComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [LoginService,AuthGuard , LoginGuard , FetchusertaskService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }

// export function tokenGetter() {
//   return localStorage.getItem('access_token');
// }

 // JwtModule.forRoot({
    //   config:{
    //     tokenGetter: tokenGetter,
    //     whitelistedDomains: ['localhost:4200'],
    //     blacklistedRoutes: ['localhost:4200/register']
    //   }
    // })