import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportModulesComponent } from './import-modules.component';

describe('ImportModulesComponent', () => {
  let component: ImportModulesComponent;
  let fixture: ComponentFixture<ImportModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
