import { TestBed } from '@angular/core/testing';

import { ParcelserviceService } from './parcelservice.service';

describe('ParcelserviceService', () => {
  let service: ParcelserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParcelserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
