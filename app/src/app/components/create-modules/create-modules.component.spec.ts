import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModulesComponent } from './create-modules.component';

describe('CreateModulesComponent', () => {
  let component: CreateModulesComponent;
  let fixture: ComponentFixture<CreateModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
