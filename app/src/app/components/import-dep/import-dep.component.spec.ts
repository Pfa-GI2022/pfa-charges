import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDepComponent } from './import-dep.component';

describe('ImportDepComponent', () => {
  let component: ImportDepComponent;
  let fixture: ComponentFixture<ImportDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportDepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
