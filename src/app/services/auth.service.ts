import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/User';
import { APIURL } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(public _http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public getHeaders(): HttpHeaders {
    return new HttpHeaders().set('api-token', `${localStorage.getItem('id_token')}`);
  }


  login(email: string, password: string) {
    return this._http.post<any>(`${APIURL}/users/login`, { email, password }, { headers: this.getHeaders() })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        console.log('this is my user token' + user.jwt_token)
        if (user && user.jwt_token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          console.log('Current User');
          console.log(this.currentUser);
          this.currentUserSubject.next(user);
        } else {
          console.log('missed if statement');
        }

        //console.log(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}