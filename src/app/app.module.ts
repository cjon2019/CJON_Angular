//imports for angular functionality
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//tools used to create angular layouts in html
import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';
//services, guards, and components related to users
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { JobsService } from './services/jobs.service';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
//base level components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { IndexComponent } from './components/index/index.component';
//job list components and other components within the jobs list
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { JobsIndexComponent } from './components/jobs-list/jobs-index/jobs-index.component';
import { SummaryComponent } from './components/jobs-list/summary/summary.component';
import { FinancesComponent } from './components/jobs-list/finances/finances.component';
import { DisplayComponent } from './components/jobs-list/display/display.component';
import { HeaderComponent } from './components/jobs-list/header/header.component';
//footer component and all other items inside of the footer
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/footer/about/about.component';
// routes for how angular reaches endpoints
const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'jobs-list', canActivate: [AuthGuard], children: [
      { path: '', component: JobsIndexComponent },
      { path: 'display', component: DisplayComponent },
      { path: 'finances', component: FinancesComponent },
      { path: 'header', component: HeaderComponent },
      { path: 'summary', component: SummaryComponent },
    ],
  },
  {
    path: 'about', children: [
      { path: '', component: AboutComponent },
    ],
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
    MatInputModule,
    MatTableModule
  ],
  providers: [
    AuthService,
    JobsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
