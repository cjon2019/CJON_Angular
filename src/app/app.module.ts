import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';

import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';
import { UserService } from './services/user.service';
import { JobsService } from './services/jobs.service';
import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JobsIndexComponent } from './components/jobs-list/jobs-index/jobs-index.component';
import { IndexComponent } from './components/index/index.component';
import { AboutComponent } from './components/footer/about/about.component';
import { UserComponent } from './components/user/user.component';
import { JobsListComponent } from './components/jobs-list/jobs-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlertComponent } from './components/alert/alert.component';

import { JwtInterceptor } from './components/helpers/jwt.interceptor';
import { ErrorInterceptor } from './components/helpers/error.interceptor';
import { EditComponent } from './components/user/edit/edit.component';

const routes = [
  { path: 'profile', component: UserComponent },
  { path: 'users', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'jobs', component: JobsListComponent, canActivate: [AuthGuard] },
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
    AboutComponent,
    UserComponent,
    JobsListComponent,
    FooterComponent,
    AlertComponent,
    EditComponent
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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [
    AuthService,
    JobsService,
    UserService,
    AlertService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
