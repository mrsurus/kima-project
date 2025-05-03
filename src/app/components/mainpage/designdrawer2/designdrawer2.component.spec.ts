import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Designdrawer2Component } from './designdrawer2.component';

describe('Designdrawer2Component', () => {
  let component: Designdrawer2Component;
  let fixture: ComponentFixture<Designdrawer2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Designdrawer2Component]
    });
    fixture = TestBed.createComponent(Designdrawer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
