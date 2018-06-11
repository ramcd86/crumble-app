import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
// import {DashboardModule} from '../dashboard/dashboard.module';
// import {DashboardComponent} from '../dashboard/dashboard.component';
// import {DashboardComponent} from '../dashboard/dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    // DashboardModule
  ],
  declarations: [HomeComponent,
    // DashboardComponent
  ]
})
export class HomeModule {
}
