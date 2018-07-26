import { TestBed, inject } from '@angular/core/testing';

import { BackendDomainService } from './backend-domain.service';

describe('BackendDomainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendDomainService]
    });
  });

  it('should be created', inject([BackendDomainService], (service: BackendDomainService) => {
    expect(service).toBeTruthy();
  }));
});
