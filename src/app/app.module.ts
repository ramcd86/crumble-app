import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

// Services
import {HttpServiceCore} from './_services/http/HttpServiceCore.service';

// Core Modules
import {SystemAdministrationModule} from './system-administration/system-administration.module';
import {UserAdministrationModule} from './user-administration/user-administration.module';
import {NgCircleProgressModule} from 'ng-circle-progress';

// Routes
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DietLogComponent} from './diet-log/diet-log.component';
import {DietStatisticsComponent} from './diet-statistics/diet-statistics.component';
import {SystemAdministrationComponent} from './system-administration/system-administration.component';
import {UserAdministrationComponent} from './user-administration/user-administration.component';
import {RegistrationComponent} from './registration/registration.component';

// Classes
// import {IUserStore} from './_store/IUserStore.store';
// import {IUserState} from './_store/IUserState.store';
import {SessionStorageService} from './_store/SessionStorage.service';
// import {LoginComponent} from './register/login.component';
// import {RegisterComponent} from './register/register.component';
import {AuthGuardService} from './_services/auth-guard.service';
// import {ProfileComponent} from './register/profile.component';
// import {AuthenticationService} from './_services/authentication.service';


const crumbsRoutes: Routes = [
  {path: '', component: AppComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: {title: 'Crumbs Home'}},
  {path: 'dashboard', component: DashboardComponent , data: {title: 'Crumbs Dashboard'}},
  {path: 'diet-log', component: DietLogComponent , data: {title: 'Crumbs Diet Log'}},
  {path: 'diet-statistics', component: DietStatisticsComponent , data: {title: 'Crumbs Diet Stats'}},
  {path: 'crumble-system-administrator-login', component: SystemAdministrationComponent , data: {title: 'Crumbs System Administration'}},
  {path: 'user-account', component: UserAdministrationComponent , data: {title: 'Crumbs Dashboard'}},
  // , canActivate: [AuthGuardService],

  // { path: 'login', component: LoginComponent },
  //
  // { path: 'register', component: RegisterComponent },
  //
  // { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] }


];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegistrationComponent,
    HomeComponent,
    DietLogComponent,
    DietStatisticsComponent,
    // LoginComponent,
    // RegisterComponent,
    // ProfileComponent

  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(
      crumbsRoutes
    ),
    BrowserModule,
    ReactiveFormsModule,
    SystemAdministrationModule,
    UserAdministrationModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#000000',
      innerStrokeColor: '#FFFFFF',
      animationDuration: 300
    }),
    FormsModule
  ],
  providers: [
    // AuthenticationService,
    AuthGuardService,
    HttpServiceCore,
    // IUserStore,
    // IUserState,
    SessionStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
