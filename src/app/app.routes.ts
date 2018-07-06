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
  {path: 'login', component: LoginComponent, data: {title: 'Crumbs Login'}},
  {path: 'register', component: RegistrationComponent, data: {title: 'Crumbs Sign-Up'}},
  {path: 'home', component: HomeComponent, data: {title: 'Crumbs Home'}},
  {path: 'dashboard', component: DashboardComponent, data: {title: 'Crumbs Dashboard'}},
  {path: 'diet-log', component: DietLogComponent, data: {title: 'Crumbs Diet Log'}},
  {path: 'diet-statistics', component: DietStatisticsComponent, data: {title: 'Crumbs Diet Stats'}},
  {path: 'crumble-system-administrator-login', component: SystemAdministrationComponent, data: {title: 'Crumbs System Administration'}},
  {path: 'user-account', component: UserAdministrationComponent, data: {title: 'Crumbs Dashboard'}},
];

// export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(crumbsRoutes);
