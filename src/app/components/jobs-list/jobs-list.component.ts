import { Component, OnInit, ViewChild } from '@angular/core';
import { Job } from 'src/app/models/Job';
import { JobsService } from 'src/app/services/jobs.service';
import { Subscription } from 'rxjs';
import { MatPaginator, MatSort } from '@angular/material';
import { JobTableDataSource } from './job-table-datasource';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

  jobSubscription: Subscription;
  jobs: Job[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: JobTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['matched_object_id', 'position_title', 'position_location', 'min_range', 'max_range'];

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
    });


    this.dataSource = new JobTableDataSource(this.paginator, this.sort);
  }

}
