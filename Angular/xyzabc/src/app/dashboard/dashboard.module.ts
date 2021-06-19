import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { Day2Component } from './day2/day2.component';
import { ChageTextDirective } from './chage-text.directive';
import { Page404Component } from './page404/page404.component';
import { PromiseComponent } from './promise/promise.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [ParentComponent, ChildComponent, Day2Component, ChageTextDirective, Page404Component, PromiseComponent, RxjsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,

  ]
})
export class DashboardModule { }
