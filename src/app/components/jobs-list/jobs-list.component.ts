import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/Job';
import { JobsService } from 'src/app/services/jobs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

  jobSubscription: Subscription;
  jobs: Job[] = [];

  constructor(private _jobService: JobsService) {
  }

  ngOnInit() {
    this.jobSubscription = this._jobService.jobsList.subscribe(val => {
      if (val.results) {
        this.jobs = [];
      } else {
        this.jobs = val['SearchResult']['SearchResultItems'];
      }
      console.log(this.jobs);
    })
  }

}
