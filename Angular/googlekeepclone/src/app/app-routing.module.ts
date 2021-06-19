import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomelayoutComponent } from './components/homelayout/homelayout.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './services/auth/auth.guard';
import { LoginGuard } from './services/auth/login.guard';


const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component:HomelayoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'login',
    component:LoginComponent, 
    canActivate
    :[LoginGuard]
  },
  {
    path:'register',
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
