import { TestBed, inject } from '@angular/core/testing';

import { PartesService } from './partes.service';

describe('PartesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartesService]
    });
  });

  it('should ...', inject([PartesService], (service: PartesService) => {
    expect(service).toBeTruthy();
  }));
});
