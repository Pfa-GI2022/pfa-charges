import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesseurDetailsComponent } from './professeur-details.component';

describe('ProfesseurDetailsComponent', () => {
  let component: ProfesseurDetailsComponent;
  let fixture: ComponentFixture<ProfesseurDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesseurDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesseurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
