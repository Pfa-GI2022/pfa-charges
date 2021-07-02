import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDepComponent } from './admin-dep.component';

describe('AdminDepComponent', () => {
  let component: AdminDepComponent;
  let fixture: ComponentFixture<AdminDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
