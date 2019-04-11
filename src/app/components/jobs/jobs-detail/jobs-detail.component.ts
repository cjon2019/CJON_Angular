import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from 'src/app/services/jobs.service';
import { Job } from 'src/app/models/Job';

@Component({
  selector: 'app-jobs-detail',
  templateUrl: './jobs-detail.component.html',
  styleUrls: ['./jobs-detail.component.css']
})
export class JobsDetailComponent implements OnInit {

  job: Job;

  constructor(private _activatedRoute: ActivatedRoute, private _jobsService: JobsService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._jobsService.getJob(routeData.get('id')).subscribe((singleJob: Job) => {
        this.job = singleJob;
      });
    });
  }

}
