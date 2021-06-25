import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteProfesseurComponent } from './carte-professeur.component';

describe('CarteProfesseurComponent', () => {
  let component: CarteProfesseurComponent;
  let fixture: ComponentFixture<CarteProfesseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteProfesseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteProfesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
