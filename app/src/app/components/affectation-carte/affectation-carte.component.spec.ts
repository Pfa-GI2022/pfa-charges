import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationCarteComponent } from './affectation-carte.component';

describe('AffectationCarteComponent', () => {
  let component: AffectationCarteComponent;
  let fixture: ComponentFixture<AffectationCarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffectationCarteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectationCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
