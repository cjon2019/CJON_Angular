import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { JobsService } from 'src/app/services/jobs.service';
import { Job } from 'src/app/models/Job';
@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})

export class JobsListComponent implements OnInit {

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
