import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn: boolean;

  constructor(public _authService: AuthService) { }

  ngOnInit() {
    if (localStorage.getItem('api-token')) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  onClick() {
    this._authService.logout();
  }
}






