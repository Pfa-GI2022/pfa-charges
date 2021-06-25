import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteModuleComponent } from './carte-module.component';

describe('CarteModuleComponent', () => {
  let component: CarteModuleComponent;
  let fixture: ComponentFixture<CarteModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
