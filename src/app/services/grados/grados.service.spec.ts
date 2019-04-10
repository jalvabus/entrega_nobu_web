import { TestBed, inject } from '@angular/core/testing';

import { GradosService } from './grados.service';

describe('GradosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GradosService]
    });
  });

  it('should ...', inject([GradosService], (service: GradosService) => {
    expect(service).toBeTruthy();
  }));
});
