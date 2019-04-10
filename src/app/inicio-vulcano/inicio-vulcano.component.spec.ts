import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioVulcanoComponent } from './inicio-vulcano.component';

describe('InicioVulcanoComponent', () => {
  let component: InicioVulcanoComponent;
  let fixture: ComponentFixture<InicioVulcanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioVulcanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioVulcanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
