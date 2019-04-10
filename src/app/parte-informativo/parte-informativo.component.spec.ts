import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteInformativoComponent } from './parte-informativo.component';

describe('ParteInformativoComponent', () => {
  let component: ParteInformativoComponent;
  let fixture: ComponentFixture<ParteInformativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParteInformativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParteInformativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
