import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Job } from '../models/Job';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

const Api_Url = 'https://cjon-red-badge-project.herokuapp.com/api/v1';

@Injectable({
  providedIn: 'root'
})
export class JobsService {


  public jobsList = new BehaviorSubject<any>({ results: "none" });

  constructor(private _http: HttpClient) {

  }

  private getHeaders() {
    return new HttpHeaders().set('api-token', `${localStorage.getItem('id_token')}`);
  }

  // Blank jobs page
  getJobs() {
    return this._http.get(`${Api_Url}/jobs/`, { headers: this.getHeaders() });
  }
  getJobsByState(state: string) {
    return this._http.get(`${Api_Url}/jobs/state/${state}`, { headers: this.getHeaders() });
  }

  getJobByPosition(position_title: string) {
    return this._http.get(`${Api_Url}/jobs/position/${position_title}`, { headers: this.getHeaders() });
  }
  // getJob's parameters of id are what the specific json values for identification are.
  getJobsByStateAndPosition(state: string, position_title: string) {
    return this._http.get(`${Api_Url}/jobs/${state}/${position_title}`, { headers: this.getHeaders() });
  }

  getJobsByStateAndPositionTEST(state: string, position_title: string, cb: Function): void {
    this._http.get(`${Api_Url}/jobs/${state}/${position_title}`, { headers: this.getHeaders() })
      .subscribe(value => {
        console.log(value);
        this.jobsList.next(value);
        cb();
      });

  }

  test(state: string, position_title: string) {
    return this._http.get(`${Api_Url}/jobs/test`, { headers: this.getHeaders() })
      .pipe(map(job => {
        console.log('Printing Data: ' + job);
        localStorage.setItem('job', JSON.stringify(job));
        // this.jobSubject.next(job);
        return job;
      }));
  }
}
