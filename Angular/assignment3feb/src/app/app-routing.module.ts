import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { CropimageComponent } from './cropimage/cropimage.component';
import { PassvalidationComponent } from './passvalidation/passvalidation.component';

const routes: Routes = [
  {path:'crop', component:CropimageComponent},
  {path:'password', component:PassvalidationComponent},
  {path:'credit', component:CreditcardComponent},
  {path:'', redirectTo:'crop',pathMatch:'full'},
  {path:'**', redirectTo:'crop',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
