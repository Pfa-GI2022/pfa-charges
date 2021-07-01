import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepCardComponent } from './dep-card.component';

describe('DepCardComponent', () => {
  let component: DepCardComponent;
  let fixture: ComponentFixture<DepCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
