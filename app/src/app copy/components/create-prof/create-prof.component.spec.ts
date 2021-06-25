import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfComponent } from './create-prof.component';

describe('CreateProfComponent', () => {
  let component: CreateProfComponent;
  let fixture: ComponentFixture<CreateProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
