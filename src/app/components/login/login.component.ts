import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // sets loginForm to be a form
  public loginForm: FormGroup;

  // Forms and Services needed for the creation of the Register Page.
  constructor(private _form: FormBuilder, private authService: AuthService) {
    // creates the form
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    // Sets values included in the login form
    this.loginForm = this._form.group({
      // required user information to set user as logged in
      email: new FormControl,
      password: new FormControl
    });
  }

  onSubmit() {
    // User is now set to be logged in
    this.authService.login(this.loginForm.value);
  }
}
