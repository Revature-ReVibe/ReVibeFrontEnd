import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVibeComponent } from './new-vibe.component';

describe('NewVibeComponent', () => {
  let component: NewVibeComponent;
  let fixture: ComponentFixture<NewVibeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewVibeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVibeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
