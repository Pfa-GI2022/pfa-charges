import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousModulesComponent } from './sous-modules.component';

describe('SousModulesComponent', () => {
  let component: SousModulesComponent;
  let fixture: ComponentFixture<SousModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SousModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
