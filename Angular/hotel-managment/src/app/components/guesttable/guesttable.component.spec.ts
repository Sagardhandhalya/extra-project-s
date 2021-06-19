import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuesttableComponent } from './guesttable.component';

describe('GuesttableComponent', () => {
  let component: GuesttableComponent;
  let fixture: ComponentFixture<GuesttableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuesttableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuesttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
