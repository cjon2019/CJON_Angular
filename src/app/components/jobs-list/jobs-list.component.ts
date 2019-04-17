import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/Job';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

  job: Job;

  constructor() { }

  ngOnInit() {
  }

}
