import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {routing} from './app.routes';

// Services
import {HttpServiceCore} from './_services/http/http-service-core.service';

// Core Modules
import {SystemAdministrationModule} from './system-administration/system-administration.module';
import {NgCircleProgressModule} from 'ng-circle-progress';

// Routes
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DietLogComponent} from './diet-log/diet-log.component';
import {DietStatisticsComponent} from './diet-statistics/diet-statistics.component';
import {RegistrationComponent} from './registration/registration.component';
import {SessionStorageService} from './_store/SessionStorage.service';
import {AuthGuardService} from './_services/auth-guard.service';
import {LoginComponent} from './login/login.component';
import {UserManagementService} from './_services/user-management.service';
import {DashboardModalComponent} from './dashboard/modal/dashboard-modal.component';
import {DataManagerService} from './_services/data-manager.service';
import {FooterComponent} from './footer/footer.component';
import {UserAdministrationComponent} from './user-administration/user-administration.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegistrationComponent,
    HomeComponent,
    DietLogComponent,
    DietStatisticsComponent,
    LoginComponent,
    DashboardModalComponent,
    FooterComponent,
    UserAdministrationComponent
  ],
  imports: [
    HttpClientModule,
    routing,
    BrowserModule,
    ReactiveFormsModule,
    SystemAdministrationModule,
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
    AuthGuardService,
    HttpServiceCore,
    SessionStorageService,
    UserManagementService,
    DataManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
