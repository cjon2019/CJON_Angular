import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../../services/jobs.service';
import { Job } from '../../../models/Job';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-jobs-index',
  templateUrl: './jobs-index.component.html',
  styleUrls: ['./jobs-index.component.css']
})
export class JobsIndexComponent implements OnInit {

  // Table names of the Jobs table
  columnNames = ['MatchedObjectId', 'PositionTitle', 'PositionLocation', 'PositionStartDate', 'PositionEndDate', 'JobSummary', 'TotalOpenings', 'MinimumRange', 'MaximumRange', 'RateIntervalCode'];
  // the source of the data in the Table
  dataSource: MatTableDataSource<Job>

  // Uses the service JobsService in any below functions needed to use its services
  constructor(private _jobsService: JobsService) { }

  ngOnInit() {
    // Gets all jobs in the job table and sets it to a datasource
    this._jobsService.getJobs().subscribe((jobs: Job[]) => {
      this.dataSource = new MatTableDataSource<Job>(jobs);
    });
  }

}
