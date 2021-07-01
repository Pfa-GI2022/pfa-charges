import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilCardComponent } from './fil-card.component';

describe('FilCardComponent', () => {
  let component: FilCardComponent;
  let fixture: ComponentFixture<FilCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
