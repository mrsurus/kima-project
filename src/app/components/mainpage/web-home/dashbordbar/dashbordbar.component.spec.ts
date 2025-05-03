import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordbarComponent } from './dashbordbar.component';

describe('DashbordbarComponent', () => {
  let component: DashbordbarComponent;
  let fixture: ComponentFixture<DashbordbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashbordbarComponent]
    });
    fixture = TestBed.createComponent(DashbordbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
