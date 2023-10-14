import { TestBed } from '@angular/core/testing';

import { NetdataservService } from './netdataserv.service';

describe('NetdataservService', () => {
  let service: NetdataservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetdataservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
