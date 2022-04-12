import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseResumesComponent } from './browse-resumes.component';

describe('BrowseResumesComponent', () => {
  let component: BrowseResumesComponent;
  let fixture: ComponentFixture<BrowseResumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseResumesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseResumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
