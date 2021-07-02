import { TestBed } from '@angular/core/testing';

import { CalculeChargeService } from './calcule-charge.service';

describe('CalculeChargeService', () => {
  let service: CalculeChargeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculeChargeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
