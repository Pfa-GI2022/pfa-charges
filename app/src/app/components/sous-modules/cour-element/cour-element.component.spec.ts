import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourElementComponent } from './cour-element.component';

describe('CourElementComponent', () => {
  let component: CourElementComponent;
  let fixture: ComponentFixture<CourElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
