import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcodesComponent } from './shortcodes.component';

describe('ShortcodesComponent', () => {
  let component: ShortcodesComponent;
  let fixture: ComponentFixture<ShortcodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortcodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
