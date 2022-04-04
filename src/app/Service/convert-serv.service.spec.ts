import { TestBed } from '@angular/core/testing';

import { ConvertServService } from './convert-serv.service';

describe('ConvertServService', () => {
  let service: ConvertServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
