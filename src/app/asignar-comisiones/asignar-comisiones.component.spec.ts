import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarComisionesComponent } from './asignar-comisiones.component';

describe('AsignarComisionesComponent', () => {
  let component: AsignarComisionesComponent;
  let fixture: ComponentFixture<AsignarComisionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarComisionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarComisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
