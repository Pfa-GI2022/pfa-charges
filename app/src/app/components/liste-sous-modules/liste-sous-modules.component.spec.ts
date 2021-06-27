import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSousModulesComponent } from './liste-sous-modules.component';

describe('ListeSousModulesComponent', () => {
  let component: ListeSousModulesComponent;
  let fixture: ComponentFixture<ListeSousModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeSousModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSousModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
