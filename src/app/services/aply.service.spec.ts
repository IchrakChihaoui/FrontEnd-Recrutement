import { TestBed } from '@angular/core/testing';

import { AplyService } from './aply.service';

describe('AplyService', () => {
  let service: AplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
