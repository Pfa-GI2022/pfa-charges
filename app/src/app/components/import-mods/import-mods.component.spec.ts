import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportModsComponent } from './import-mods.component';

describe('ImportModsComponent', () => {
  let component: ImportModsComponent;
  let fixture: ComponentFixture<ImportModsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportModsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportModsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
