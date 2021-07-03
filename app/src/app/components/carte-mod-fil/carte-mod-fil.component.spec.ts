import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteModFilComponent } from './carte-mod-fil.component';

describe('CarteModFilComponent', () => {
  let component: CarteModFilComponent;
  let fixture: ComponentFixture<CarteModFilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteModFilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteModFilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
