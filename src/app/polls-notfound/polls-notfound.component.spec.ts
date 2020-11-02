import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollsNotfoundComponent } from './polls-notfound.component';

describe('PollsNotfoundComponent', () => {
  let component: PollsNotfoundComponent;
  let fixture: ComponentFixture<PollsNotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollsNotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollsNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
