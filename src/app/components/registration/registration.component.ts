import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from 'src/app/services/alert.service';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  loading = false;
  submitted = false;

  private _registerForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _authService: AuthService,
    private _userService: UserService,
    private _alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this._authService.currentUserValue) {
      this._router.navigate(['/']);
    }
  }

  ngOnInit() {
    this._registerForm = this._formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this._registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this._registerForm.value);

    // stop here if form is invalid
    if (this._registerForm.invalid) {
      console.log('Failed')
      return;
    }

    this.loading = true;
    this._userService.register(this._registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this._alertService.success('Registration successful', true);
          this._router.navigate(['/login']);
        },
        error => {
          this._alertService.error(error);
          this.loading = false;
        });
  }
}
