import { TestBed } from '@angular/core/testing';

import { SRServiceService } from './srservice.service';

describe('SRServiceService', () => {
  let service: SRServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SRServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
