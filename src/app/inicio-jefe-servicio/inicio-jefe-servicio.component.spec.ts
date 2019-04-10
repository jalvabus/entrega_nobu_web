import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioJefeServicioComponent } from './inicio-jefe-servicio.component';

describe('InicioJefeServicioComponent', () => {
  let component: InicioJefeServicioComponent;
  let fixture: ComponentFixture<InicioJefeServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioJefeServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioJefeServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
