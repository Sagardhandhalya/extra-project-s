import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddguestformComponent } from './components/addguestform/addguestform.component';
import { AdminlayoutComponent } from './components/adminlayout/adminlayout.component';
import { GuesttableComponent } from './components/guesttable/guesttable.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },

  {
    path:"login",
    component:LoginComponent
  },
  {
    path:'admin',
    component:AdminlayoutComponent,
    children:[
      {
        path:'',
        children:[
          {
            path:'',
            redirectTo:'guesttable',
            pathMatch:'full'
          },
          {
            path:"guesttable",
            component:GuesttableComponent
          },
          {
            path:"addguest",
            component:AddguestformComponent
          }
        ]
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
