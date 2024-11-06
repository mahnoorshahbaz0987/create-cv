import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeAppComponent } from './resume-app.component';

describe('ResumeAppComponent', () => {
  let component: ResumeAppComponent;
  let fixture: ComponentFixture<ResumeAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
