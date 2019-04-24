import { Component, OnInit } from '@angular/core';
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { User } from "src/app/models/User";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  currentUser: User;
  users: User[] = [];
  editForm: FormGroup;
  currentUserSubscription: Subscription;

  constructor(
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _userService: UserService
  ) { 
    this.createForm();
  }
    
  ngOnInit() {
    // let user = localStorage.getItem('user');
    // console.log(user);
    // if(!user) {
      //   alert("Invalid action.")
      //   this._router.navigate(['/test']);
      //   return;
      // }
    this.currentUserSubscription = this._authService.currentUser.subscribe(user => {
      console.log(user)
      this.currentUser = user;
    });
    this.loadAllUsers();
    console.log(this.currentUser)
  }

  onSubmit() {
    console.log(this.editForm.value)
    this._userService.update(this.editForm.value, this.currentUser.id)
      .subscribe(
        data => {
          this._router.navigate(['/test']);
        },
        error => {
          alert(error);
        });
  }
  createForm() {
    this.editForm = this._formBuilder.group({
      email: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required]
    });
  }
  private loadAllUsers() {
    this._userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }
}
