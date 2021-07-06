import { TestBed } from '@angular/core/testing';

import { FiliereResolverService } from './filiere-resolver.service';

describe('FiliereResolverService', () => {
  let service: FiliereResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiliereResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
