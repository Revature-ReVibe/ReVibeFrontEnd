import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VibeComponent } from './vibe.component';

describe('VibeComponent', () => {
  let component: VibeComponent;
  let fixture: ComponentFixture<VibeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VibeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VibeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
