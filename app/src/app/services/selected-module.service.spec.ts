import { TestBed } from '@angular/core/testing';

import { SelectedModuleService } from './selected-module.service';

describe('SelectedModuleService', () => {
  let service: SelectedModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
