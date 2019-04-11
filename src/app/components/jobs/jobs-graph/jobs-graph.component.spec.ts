import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsGraphComponent } from './jobs-graph.component';

describe('JobsGraphComponent', () => {
  let component: JobsGraphComponent;
  let fixture: ComponentFixture<JobsGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
