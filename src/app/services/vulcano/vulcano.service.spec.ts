import { TestBed, inject } from '@angular/core/testing';

import { VulcanoService } from './vulcano.service';

describe('VulcanoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VulcanoService]
    });
  });

  it('should ...', inject([VulcanoService], (service: VulcanoService) => {
    expect(service).toBeTruthy();
  }));
});
