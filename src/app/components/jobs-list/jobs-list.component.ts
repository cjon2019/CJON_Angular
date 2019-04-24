import { Component, OnInit, ViewChild } from '@angular/core';
import { Job } from 'src/app/models/Job';
import { JobsService } from 'src/app/services/jobs.service';
import { Subscription } from 'rxjs';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

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
  dataSource: MatTableDataSource<any>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['MatchedObjectId', 'PositionTitle', 'PositionLocation', 'MinimumRange', 'MaximumRange'];

  constructor(private _jobService: JobsService) {
  }

  ngOnInit() {
    this.jobSubscription = this._jobService.jobsList.subscribe(val => {
      if (val.results) {
        this.dataSource = new MatTableDataSource([]);
      } else {
        this.dataSource = new MatTableDataSource(val['SearchResult']['SearchResultItems']);
      }
      console.log(this.jobs);
    });


    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
