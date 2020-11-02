import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollCheckComponent } from './poll-check.component';

describe('PollCheckComponent', () => {
  let component: PollCheckComponent;
  let fixture: ComponentFixture<PollCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
