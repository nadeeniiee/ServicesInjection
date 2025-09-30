import { TestBed } from '@angular/core/testing';

import { ServiceFunctions } from './service.functions';

describe('ServiceFunctions', () => {
  let service: ServiceFunctions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFunctions);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
