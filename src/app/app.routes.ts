import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserAdministrationComponent} from './user-administration/user-administration.component';
import {SystemAdministrationComponent} from './system-administration/system-administration.component';
import {DietStatisticsComponent} from './diet-statistics/diet-statistics.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DietLogComponent} from './diet-log/diet-log.component';
import {AppComponent} from './app.component';
import {ModuleWithProviders} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';

export const crumbsRoutes: Routes = [
  {path: '', component: AppComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: UserAdministrationComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'diet-log', component: DietLogComponent},
  {path: 'diet-statistics', component: DietStatisticsComponent},
  {path: 'crumble-system-administrator-login', component: SystemAdministrationComponent},
  {path: 'user-account', component: UserAdministrationComponent},
];


export const routing: ModuleWithProviders = RouterModule.forRoot(crumbsRoutes);
