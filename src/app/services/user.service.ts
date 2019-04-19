import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/User'

const Api_Url = 'https://cjon-red-badge-project.herokuapp.com';


@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${Api_Url}/users`);
  }

  getById(id: number) {
    return this.http.get(`${Api_Url}/users/${id}`);
  }

  register(user: User) {
    return this.http.post(`${Api_Url}/users/register`, user);
  }

  update(user: User) {
    return this.http.put(`${Api_Url}/users/${user.id}`, user);
  }

  delete(id: number) {
    return this.http.delete(`${Api_Url}/users/${id}`);
  }
}