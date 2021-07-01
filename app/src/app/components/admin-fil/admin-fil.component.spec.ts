import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFilComponent } from './admin-fil.component';

describe('AdminFilComponent', () => {
  let component: AdminFilComponent;
  let fixture: ComponentFixture<AdminFilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
