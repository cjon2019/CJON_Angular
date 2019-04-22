import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/User'

const Api_Url = 'https://cjon-red-badge-project.herokuapp.com';


@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get<User[]>(`${Api_Url}/users/`, { headers: this.getHeaders() });
  }

  getById(id: number) {
    return this._http.get(`${Api_Url}/users/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('api-token', `${localStorage.getItem('id_token')}`);
  }

  register(user: User) {
    return this._http.post(`${Api_Url}/api/v1/users/`, user, { headers: this.getHeaders() });
  }

  update(user: User) {
    return this._http.put(`${Api_Url}/users/${user.id}`, user, { headers: this.getHeaders() });
  }

  delete(id: number) {
    return this._http.delete(`${Api_Url}/users/${id}`, { headers: this.getHeaders() });
  }
}