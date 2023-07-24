import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftIconeBarComponent } from './left-icone-bar.component';

describe('LeftIconeBarComponent', () => {
  let component: LeftIconeBarComponent;
  let fixture: ComponentFixture<LeftIconeBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftIconeBarComponent]
    });
    fixture = TestBed.createComponent(LeftIconeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
