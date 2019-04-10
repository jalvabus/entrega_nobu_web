import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionUnidadComponent } from './asignacion-unidad.component';

describe('AsignacionUnidadComponent', () => {
  let component: AsignacionUnidadComponent;
  let fixture: ComponentFixture<AsignacionUnidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionUnidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
