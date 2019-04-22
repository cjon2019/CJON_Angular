import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JobsService } from 'src/app/services/jobs.service';
import { ActivatedRoute, Router } from '@angular/router';

const Api_Url = 'https://cjon-red-badge-project.herokuapp.com';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  loading = false;
  submitted = false;
  returnUrl: string;

  private _jobSearchForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _http: HttpClient,
    private _route: ActivatedRoute,
    private _router: Router,
    private _jobsService: JobsService
  ) { }

  ngOnInit() {
    this._jobSearchForm = this._formBuilder.group({
      jobPosition: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required]
    })

    this._jobSearchForm.valueChanges.subscribe(console.log)
  }

  searchButtonClick() {
    var jobPosition = this._jobSearchForm.value['jobPosition'];
    var city = this._jobSearchForm.value['city'];
    var state = this._jobSearchForm.value['state'];
    console.log(jobPosition);
    console.log(city);
    console.log(state);
    console.log('button pressed');
    return this._http.get(`${Api_Url}/jobs`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('api-token', `${localStorage.getItem('id_token')}`);
  }


}
