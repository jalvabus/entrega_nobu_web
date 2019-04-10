import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacionMandosComponent } from './estacion-mandos.component';

describe('EstacionMandosComponent', () => {
  let component: EstacionMandosComponent;
  let fixture: ComponentFixture<EstacionMandosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstacionMandosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstacionMandosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
