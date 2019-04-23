import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JobsService } from 'src/app/services/jobs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { first } from 'rxjs/operators';
import { Job } from 'src/app/models/Job';
import { Subscription } from 'rxjs';

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
  job: Job;
  jobSubscription: Subscription;

  private _jobSearchForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _http: HttpClient,
    private _route: ActivatedRoute,
    private _router: Router,
    private _jobsService: JobsService,
    private _alertService: AlertService
  ) {
    this.jobSubscription = this._jobsService.job.subscribe(job => {
      this.job = job;
    });
  }

  ngOnInit() {
    this._jobSearchForm = this._formBuilder.group({
      position_title: ['', Validators.required],
      position_location: ['', Validators.required]
    })

    this._jobSearchForm.valueChanges.subscribe(console.log)
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/jobs';
  }

  get f() { return this._jobSearchForm.controls; }


  onSubmit() {
    this.submitted = true;

    if (this._jobSearchForm.invalid) {
      return;
    }

    this.loading = true;
    // this._jobsService.getJobsByStateAndPosition(this.f.position_location.value, this.f.position_title.value)
    this._jobsService.test(this.f.position_location.value, this.f.position_title.value)
      .pipe(first())
      .subscribe(
        data => {
          this._router.navigate([this.returnUrl]);
        },
        error => {
          this._alertService.error(error);
          this.loading = false;
        });
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
