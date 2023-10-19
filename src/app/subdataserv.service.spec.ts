import { TestBed } from '@angular/core/testing';

import { SubdataservService } from './subdataserv.service';

describe('SubdataservService', () => {
  let service: SubdataservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubdataservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
