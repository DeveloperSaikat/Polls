import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollResolvedComponent } from './poll-resolved.component';

describe('PollResolvedComponent', () => {
  let component: PollResolvedComponent;
  let fixture: ComponentFixture<PollResolvedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollResolvedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollResolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
