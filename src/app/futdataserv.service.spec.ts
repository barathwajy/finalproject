import { TestBed } from '@angular/core/testing';

import { FutdataservService } from './futdataserv.service';

describe('FutdataservService', () => {
  let service: FutdataservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FutdataservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
