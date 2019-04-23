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

  job: Job;
  jobSubscription: Subscription;
  jobs: Job[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
