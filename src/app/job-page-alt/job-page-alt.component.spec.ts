import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPageAltComponent } from './job-page-alt.component';

describe('JobPageAltComponent', () => {
  let component: JobPageAltComponent;
  let fixture: ComponentFixture<JobPageAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPageAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPageAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
