import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteMatiereFilComponent } from './carte-matiere-fil.component';

describe('CarteMatiereFilComponent', () => {
  let component: CarteMatiereFilComponent;
  let fixture: ComponentFixture<CarteMatiereFilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteMatiereFilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteMatiereFilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
