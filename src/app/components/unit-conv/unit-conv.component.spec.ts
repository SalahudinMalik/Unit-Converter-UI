import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitConvComponent } from './unit-conv.component';

describe('UnitConvComponent', () => {
  let component: UnitConvComponent;
  let fixture: ComponentFixture<UnitConvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitConvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitConvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
