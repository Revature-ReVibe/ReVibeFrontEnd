import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplyFeedComponent } from './reply-feed.component';

describe('ReplyFeedComponent', () => {
  let component: ReplyFeedComponent;
  let fixture: ComponentFixture<ReplyFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplyFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplyFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
