import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialEmergenciasComponent } from './historial-emergencias.component';

describe('HistorialEmergenciasComponent', () => {
  let component: HistorialEmergenciasComponent;
  let fixture: ComponentFixture<HistorialEmergenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialEmergenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialEmergenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
