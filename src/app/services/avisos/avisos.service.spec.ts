import { TestBed, inject } from '@angular/core/testing';

import { AvisosService } from './avisos.service';

describe('AvisosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvisosService]
    });
  });

  it('should ...', inject([AvisosService], (service: AvisosService) => {
    expect(service).toBeTruthy();
  }));
});
