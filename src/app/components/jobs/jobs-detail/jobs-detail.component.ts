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

  //sets variable job as the Job model
  job: Job;

  // ActivatedRoute contains the information about a route associated with a component loaded in an outlet. an ActivatedRoute can also be used to traverse the router state tree.
  constructor(private _activatedRoute: ActivatedRoute, private _jobsService: JobsService) { }

  ngOnInit() {
    // gets route of specific job grabbed from getJob. sets it into singleJob
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._jobsService.getJob(routeData.get('id')).subscribe((singleJob: Job) => {
        this.job = singleJob;
      });
    });
  }

}
