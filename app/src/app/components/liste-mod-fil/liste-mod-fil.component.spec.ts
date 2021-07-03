import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeModFilComponent } from './liste-mod-fil.component';

describe('ListeModFilComponent', () => {
  let component: ListeModFilComponent;
  let fixture: ComponentFixture<ListeModFilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeModFilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeModFilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
