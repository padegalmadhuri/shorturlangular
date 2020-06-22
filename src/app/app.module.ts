import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { MaindisplayComponent } from './maindisplay/maindisplay.component';
import { ModalComponent } from './modal/modal.component';
import { ModaleditComponent } from './modaledit/modaledit.component';
import { RegisterComponent } from './register/register.component';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { ShorturlComponent } from './shorturl/shorturl.component';
import { ToastContainerComponent } from './toast-container/toast-container.component';
import { VerificationComponent } from './verification/verification.component';

import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartjsModule } from 'ng-chartjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ForgotComponent,
    LoginComponent,
    MaindisplayComponent,
    ModalComponent,
    ModaleditComponent,
    RegisterComponent,
    ResetpassComponent,
    ShorturlComponent,
    ToastContainerComponent,
    VerificationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgChartjsModule,
    NgbModule
  ],
  providers: [AuthGuard,{provide: LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
