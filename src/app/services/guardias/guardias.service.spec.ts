import { TestBed, inject } from '@angular/core/testing';

import { GuardiasService } from './guardias.service';

describe('GuardiasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardiasService]
    });
  });

  it('should ...', inject([GuardiasService], (service: GuardiasService) => {
    expect(service).toBeTruthy();
  }));
});
