import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandosComponent } from './mandos.component';

describe('MandosComponent', () => {
  let component: MandosComponent;
  let fixture: ComponentFixture<MandosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
