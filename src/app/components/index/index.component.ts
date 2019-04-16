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
      state: '',
      zip_code: ''
    })

    this.myForm.valueChanges.subscribe(console.log)
  }

  searchButtonClick(){
    var jobPosition = this.myForm.value['jobPosition'];
    console.log(jobPosition);
    console.log(this.myForm.value['city']);
    console.log(this.myForm.value['state']);
    console.log(this.myForm.value['zip_code']);
  }

}
