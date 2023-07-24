import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesidebarComponent } from './homesidebar.component';

describe('HomesidebarComponent', () => {
  let component: HomesidebarComponent;
  let fixture: ComponentFixture<HomesidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomesidebarComponent]
    });
    fixture = TestBed.createComponent(HomesidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
