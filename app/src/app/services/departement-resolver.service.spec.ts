import { TestBed } from '@angular/core/testing';

import { DepartementResolverService } from './departement-resolver.service';

describe('DepartementResolverService', () => {
  let service: DepartementResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartementResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
