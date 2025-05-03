import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Designdrawer1Component } from './designdrawer1.component';

describe('Designdrawer1Component', () => {
  let component: Designdrawer1Component;
  let fixture: ComponentFixture<Designdrawer1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Designdrawer1Component]
    });
    fixture = TestBed.createComponent(Designdrawer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
