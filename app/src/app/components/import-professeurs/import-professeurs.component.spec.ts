import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportProfesseursComponent } from './import-professeurs.component';

describe('ImportProfesseursComponent', () => {
  let component: ImportProfesseursComponent;
  let fixture: ComponentFixture<ImportProfesseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportProfesseursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportProfesseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
