import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobsService } from 'src/app/services/jobs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from 'src/app/models/Job';
import { Subscription } from 'rxjs';


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
  jobsList: any;
  jobSubscription: Subscription;

  public _jobSearchForm: FormGroup;

  constructor(
    public _formBuilder: FormBuilder,
    public _route: ActivatedRoute,
    public _router: Router,
    public _jobsService: JobsService,
  ) { }

  ngOnInit() {
    this._jobSearchForm = this._formBuilder.group({
      position_title: ['', Validators.required],
      position_location: ['', Validators.required]
    });

    this._jobSearchForm.valueChanges.subscribe(console.log);
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/jobs';
  }

  get f() { return this._jobSearchForm.controls; }


  onSubmit() {
    this.submitted = true;
    if (this._jobSearchForm.invalid) {
      console.log('Form Invalid');
      return;
    }

    this.loading = true;
    this._jobsService.getJobsByStateAndPositionTEST(this.f.position_location.value, this.f.position_title.value, () => {
      this._router.navigate([this.returnUrl]);
    });

  }
}
