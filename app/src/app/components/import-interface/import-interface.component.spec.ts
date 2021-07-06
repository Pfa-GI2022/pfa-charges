import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportInterfaceComponent } from './import-interface.component';

describe('ImportInterfaceComponent', () => {
  let component: ImportInterfaceComponent;
  let fixture: ComponentFixture<ImportInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
