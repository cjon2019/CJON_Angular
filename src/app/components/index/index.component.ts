import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      jobPosition: '',
      city: '',
      state: ''
    })

    this.myForm.valueChanges.subscribe(console.log)
  }

  searchButtonClick(){
    var jobPosition = this.myForm.value['jobPosition'];
    var city = this.myForm.value['city'];
    var state = this.myForm.value['state'];
    console.log(jobPosition);
    console.log(city);
    console.log(state);
  }

}
