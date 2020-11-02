import { TestBed } from '@angular/core/testing';

import { PolldataResolverService } from './polldata-resolver.service';

describe('PolldataResolverService', () => {
  let service: PolldataResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolldataResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
