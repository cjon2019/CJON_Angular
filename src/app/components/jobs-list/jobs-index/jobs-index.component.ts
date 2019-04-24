import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../../services/jobs.service';
import { Job } from '../../../models/Job';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-jobs-index',
  templateUrl: './jobs-index.component.html',
  styleUrls: ['./jobs-index.component.css']
})
export class JobsIndexComponent implements OnInit {

  jobSubscription: Subscription;
  Jobs: Object;

 

  // Table names of the Jobs table
  //columnNames = ['MatchedObjectId', 'PositionTitle', 'PositionLocation', 'PositionStartDate', 'PositionEndDate', 'JobSummary', 'TotalOpenings', 'MinimumRange', 'MaximumRange', 'RateIntervalCode'];
  // the source of the data in the Table
  //dataSource: MatTableDataSource<Job>

  // Uses the service JobsService in any below functions needed to use its services
  constructor(private _jobService: JobsService) { 

  }

  ngOnInit() {
    this._jobService.getJobs().subscribe(Jobs => {
      this.Jobs = Jobs
      console.log(this.Jobs)
    })
    //this.jobSubscription = this._jobService.jobsIndex.subscribe(val => {
      //if (val.results) {
        //this.jobs = [];
      //} else {
        //this.jobs = val['SearchResult']['SearchResultItems'];
      //}
      //console.log(this.jobs);
    //})
  }

  

}
