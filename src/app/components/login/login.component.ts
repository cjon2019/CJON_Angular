import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from 'src/app/services/alert.service'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  submitted = false;
  returnUrl: string;

  public _loginForm: FormGroup;

  constructor(
    public _formBuilder: FormBuilder,
    public _route: ActivatedRoute,
    public _router: Router,
    public _authService: AuthService,
    public _alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this._authService.currentUserValue) {
      this._router.navigate(['/']);
    }
  }

  ngOnInit() {
    this._loginForm = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/profile';
  }

  // convenience getter for easy access to form fields
  get f() { return this._loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this._loginForm.invalid) {
      return;
    }

    this.loading = true;
    this._authService.login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this._router.navigate([this.returnUrl]);
        },
        error => {
          this._alertService.error(error);
          this.loading = false;
        });
  }
}
