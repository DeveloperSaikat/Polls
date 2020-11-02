import { TestBed } from '@angular/core/testing';

import { PollsProjectService } from './polls-project.service';

describe('PollsProjectService', () => {
  let service: PollsProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PollsProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
