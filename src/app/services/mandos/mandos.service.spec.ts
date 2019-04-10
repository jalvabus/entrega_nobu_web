import { TestBed, inject } from '@angular/core/testing';

import { MandosService } from './mandos.service';

describe('MandosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MandosService]
    });
  });

  it('should ...', inject([MandosService], (service: MandosService) => {
    expect(service).toBeTruthy();
  }));
});
