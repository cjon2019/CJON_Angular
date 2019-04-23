import { Component, OnInit } from '@angular/core';
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { User } from "src/app/models/User";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user: User;
  editForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _userService: UserService
    ) { }

  ngOnInit() {
    let user = localStorage.getItem("user");
    if(!user) {
      alert("Invalid action.")
      this._router.navigate(['/test']);
      return;
    }
    this.editForm = this._formBuilder.group({
      id: [],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
    this._userService.getById(+user)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    console.log(this.editForm.value)
    this._userService.update(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this._router.navigate(['/test']);
        },
        error => {
          alert(error);
        });
  }
}
