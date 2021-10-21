import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevLoginComponent } from './rev-login.component';

describe('RevLoginComponent', () => {
  let component: RevLoginComponent;
  let fixture: ComponentFixture<RevLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
