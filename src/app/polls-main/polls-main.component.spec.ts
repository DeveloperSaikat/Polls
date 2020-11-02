import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollsMainComponent } from './polls-main.component';

describe('PollsMainComponent', () => {
  let component: PollsMainComponent;
  let fixture: ComponentFixture<PollsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
