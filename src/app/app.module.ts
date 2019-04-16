import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { 
  MatToolbarModule, 
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

import { AuthService } from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JobsService } from './services/jobs.service';
import { JobsIndexComponent } from './components/jobs-list/jobs-index/jobs-index.component';
import { AuthGuard } from './guards/auth.guard';
import { IndexComponent } from './components/index/index.component';
import { SummaryComponent } from './components/jobs-list/summary/summary.component';
import { FinancesComponent } from './components/jobs-list/finances/finances.component';
import { AboutComponent } from './components/footer/about/about.component';
import { UserComponent } from './components/user/user.component';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { DisplayComponent } from './components/jobs-list/display/display.component';
import { HeaderComponent } from './components/jobs-list/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'jobs-list', canActivate: [AuthGuard] , children: [
      { path: '', component: JobsIndexComponent },
      { path: 'display', component: DisplayComponent },
      { path: 'finances', component: FinancesComponent },
      { path: 'header', component: HeaderComponent },
      { path: 'summary', component: SummaryComponent }
    ]
  },
  { path: '**', component: IndexComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    JobsIndexComponent,
    IndexComponent,
    SummaryComponent,
    FinancesComponent,
    AboutComponent,
    UserComponent,
    JobsListComponent,
    DisplayComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    AuthService,
    JobsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
