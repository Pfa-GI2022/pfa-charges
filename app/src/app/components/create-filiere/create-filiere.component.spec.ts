import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFiliereComponent } from './create-filiere.component';

describe('CreateFiliereComponent', () => {
  let component: CreateFiliereComponent;
  let fixture: ComponentFixture<CreateFiliereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFiliereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
