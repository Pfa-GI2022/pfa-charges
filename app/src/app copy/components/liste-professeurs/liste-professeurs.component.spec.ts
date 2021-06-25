import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProfesseursComponent } from './liste-professeurs.component';

describe('ListeProfesseursComponent', () => {
  let component: ListeProfesseursComponent;
  let fixture: ComponentFixture<ListeProfesseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeProfesseursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeProfesseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
