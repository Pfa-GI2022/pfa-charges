import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDepartementComponent } from './import-departement.component';

describe('ImportDepartementComponent', () => {
  let component: ImportDepartementComponent;
  let fixture: ComponentFixture<ImportDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportDepartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
