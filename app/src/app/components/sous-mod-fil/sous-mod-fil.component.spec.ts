import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousModFilComponent } from './sous-mod-fil.component';

describe('SousModFilComponent', () => {
  let component: SousModFilComponent;
  let fixture: ComponentFixture<SousModFilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousModFilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SousModFilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
