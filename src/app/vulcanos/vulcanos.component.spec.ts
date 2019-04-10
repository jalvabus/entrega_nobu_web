import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VulcanosComponent } from './vulcanos.component';

describe('VulcanosComponent', () => {
  let component: VulcanosComponent;
  let fixture: ComponentFixture<VulcanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VulcanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VulcanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
