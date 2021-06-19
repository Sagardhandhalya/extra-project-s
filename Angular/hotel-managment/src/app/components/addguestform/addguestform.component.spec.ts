import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddguestformComponent } from './addguestform.component';

describe('AddguestformComponent', () => {
  let component: AddguestformComponent;
  let fixture: ComponentFixture<AddguestformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddguestformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddguestformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
