import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAlertaComponent } from './detalle-alerta.component';

describe('DetalleAlertaComponent', () => {
  let component: DetalleAlertaComponent;
  let fixture: ComponentFixture<DetalleAlertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAlertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAlertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
