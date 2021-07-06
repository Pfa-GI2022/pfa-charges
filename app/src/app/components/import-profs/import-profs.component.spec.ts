import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportProfsComponent } from './import-profs.component';

describe('ImportProfsComponent', () => {
  let component: ImportProfsComponent;
  let fixture: ComponentFixture<ImportProfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportProfsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportProfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
