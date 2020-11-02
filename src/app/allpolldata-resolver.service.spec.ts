import { TestBed } from '@angular/core/testing';

import { AllpolldataResolverService } from './allpolldata-resolver.service';

describe('AllpolldataResolverService', () => {
  let service: AllpolldataResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllpolldataResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
