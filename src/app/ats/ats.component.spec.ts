import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATSComponent } from './ats.component';

describe('ATSComponent', () => {
  let component: ATSComponent;
  let fixture: ComponentFixture<ATSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ATSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
