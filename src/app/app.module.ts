import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// Core Modules
import {SystemAdministrationModule} from './system-administration/system-administration.module';
import {UserAdministrationModule} from './user-administration/user-administration.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {DietLogModule} from './diet-log/diet-log.module';
import {DietStatisticsModule} from './diet-statistics/diet-statistics.module';
import {HomeModule} from './home/home.module';
// Routes
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

const crumbsRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '/home', component: HomeComponent, data: {title: 'Crumble Home'}}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(
      crumbsRoutes
    ),
    BrowserModule,
    SystemAdministrationModule,
    UserAdministrationModule,
    DashboardModule,
    DietLogModule,
    DietStatisticsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
