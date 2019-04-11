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

  columnNames = [];
  dataSource: MatTableDataSource<Job>

  constructor(private _jobsService: JobsService) { }

  ngOnInit() {
    this._jobsService.getJobs().subscribe((jobs: Job[]) => {
      this.dataSource = new MatTableDataSource<Job>(jobs);
    });
  }

}
