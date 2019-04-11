import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Job } from '../models/Job';

const ApiUrl = '';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private _http: HttpClient) { }

  getJobs() {
    return this._http.get(`${ApiUrl}/Jobs`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  // getJob's parameters of id are what the specific json values for identification are.
  

  getJob(id: string) {
    return this._http.post(`${ApiUrl}/Jobs/${id}`, { headers: this.getHeaders() });
  }


}
