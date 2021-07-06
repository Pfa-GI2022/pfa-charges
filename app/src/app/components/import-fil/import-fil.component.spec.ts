import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportFilComponent } from './import-fil.component';

describe('ImportFilComponent', () => {
  let component: ImportFilComponent;
  let fixture: ComponentFixture<ImportFilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportFilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportFilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
