import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from 'src/environments/environment.prod';
import { User } from '../models/User'

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(public _http: HttpClient) { }

  public getHeaders() {
    return new HttpHeaders().set('api-token', `${localStorage.getItem('id_token')}`);
  }

  getAll() {
    return this._http.get<User[]>(`${APIURL}/users/`, { headers: this.getHeaders() });
  }

  getById(id: number) {
    return this._http.get(`${APIURL}/users/${id}`, { headers: this.getHeaders() });
  }

  register(user: User) {
    return this._http.post(`${APIURL}/users/`, user, { headers: this.getHeaders() });
  }

  update(user: User, id: number) {
    console.log('printing user', user);
    return this._http.put(`${APIURL}/users/${id}`, user, { headers: this.getHeaders() });
  }

  delete(id: number) {
    return this._http.delete(`${APIURL}/users/${id}`, { headers: this.getHeaders() });
  }
}
