import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsIndexComponent } from './jobs-index.component';

describe('JobsIndexComponent', () => {
  let component: JobsIndexComponent;
  let fixture: ComponentFixture<JobsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
