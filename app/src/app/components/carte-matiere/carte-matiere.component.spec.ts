import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteMatiereComponent } from './carte-matiere.component';

describe('CarteMatiereComponent', () => {
  let component: CarteMatiereComponent;
  let fixture: ComponentFixture<CarteMatiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteMatiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
