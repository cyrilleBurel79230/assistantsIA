import { TestBed } from '@angular/core/testing';

import { VinService } from './vin.service';

describe('VinService', () => {
  let service: VinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
