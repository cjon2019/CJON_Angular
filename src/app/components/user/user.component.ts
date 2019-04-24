import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];

  constructor(
    public _authService: AuthService,
    public _userService: UserService,
    public _router: Router
  ) {
    this.currentUserSubscription = this._authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
    this.loadAllUsers();
    console.log(this.currentUser)
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  deleteUser(id: number) {
    var id = this.currentUser.id;

    this._userService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllUsers()
    });
    this._router.navigate(['/']);
  }

  private loadAllUsers() {
    this._userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }

}
