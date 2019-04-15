import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Job } from '../models/Job';

const ApiUrl = '';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  job: Job;

  constructor(private _http: HttpClient) { }

  getJobs() {
    return this._http.get(`${ApiUrl}/Jobs`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  // getJob's parameters of id are what the specific json values for identification are.
  

  getJob(MatchedObjectId: number) {
    return this._http.post(`${ApiUrl}/Jobs/${MatchedObjectId}`, { headers: this.getHeaders() });
  }

  getJobTitle(PositionTitle: string) {
    return this._http.post(`${ApiUrl}/Jobs/${PositionTitle}`, { headers: this.getHeaders() });
  }

  getJobLocation(PositionLocation: object) {
    return this._http.post(`${ApiUrl}/Jobs/${PositionLocation}`, { headers: this.getHeaders() });
  }

  getJobStartDate(PositionStartDate: Date) {
    return this._http.post(`${ApiUrl}/Jobs/${PositionStartDate}`, { headers: this.getHeaders() });
  }

  getJobEndDate(PositionEndDate: Date) {
    return this._http.post(`${ApiUrl}/Jobs/${PositionEndDate}`, { headers: this.getHeaders() });
  }

  getJobSummary(JobSummary: string) {
    return this._http.post(`${ApiUrl}/Jobs/${JobSummary}`, { header: this.getHeaders() });
  } 

  getJobMinimumRange(MinimumRange: number) {
    return this._http.post(`${ApiUrl}/Jobs/${MinimumRange}`, { headers: this.getHeaders() });
  }

  getJobMaximumRange(MaximumRange: number) {
    return this._http.post(`${ApiUrl}/Jobs/${MaximumRange}`, { headers: this.getHeaders() });
  }

  getJobRateIntervalCode(RateIntervalCode: string) {
    return this._http.post(`${ApiUrl}/Jobs/${RateIntervalCode}`, { headers: this.getHeaders() });
  }
}
