import { TestBed } from '@angular/core/testing';

import { GreeterServiceService } from './greeter-service.service';

describe('GreeterServiceService', () => {
  let service: GreeterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreeterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
