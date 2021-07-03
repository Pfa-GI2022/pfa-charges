import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSousModFilComponent } from './liste-sous-mod-fil.component';

describe('ListeSousModFilComponent', () => {
  let component: ListeSousModFilComponent;
  let fixture: ComponentFixture<ListeSousModFilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeSousModFilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSousModFilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
