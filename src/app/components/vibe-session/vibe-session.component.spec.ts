import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VibeSessionComponent } from './vibe-session.component';

describe('VibeSessionComponent', () => {
  let component: VibeSessionComponent;
  let fixture: ComponentFixture<VibeSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VibeSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VibeSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
