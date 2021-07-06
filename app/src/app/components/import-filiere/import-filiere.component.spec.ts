import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportFiliereComponent } from './import-filiere.component';

describe('ImportFiliereComponent', () => {
  let component: ImportFiliereComponent;
  let fixture: ComponentFixture<ImportFiliereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportFiliereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportFiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
