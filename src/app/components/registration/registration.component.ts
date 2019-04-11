import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  // sets _registerForm to be a form
  private _registerForm: FormGroup;

  // Forms and Services needed for the creation of the Register Page.
  constructor(private _form: FormBuilder, private _authService: AuthService) {
    // creates the form
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    // Each input field variable for the Register User Form
    this._registerForm = this._form.group({
      firstName: new FormControl,
      lastName: new FormControl,
      email: new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl
    });
  }

  onSubmit() {
    // Registers the user into the database, Adds in authService permissions to the newly created user.
    console.log(this._registerForm.value);
    this._authService
      .register(this._registerForm.value)
      .subscribe( () => this._authService.login(this._registerForm.value));
  }

}
