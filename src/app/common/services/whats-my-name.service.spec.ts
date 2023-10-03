import { TestBed } from '@angular/core/testing';

import { WhatsMyNameService } from './whats-my-name.service';

describe('WhatsMyNameService', () => {
  let service: WhatsMyNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhatsMyNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
