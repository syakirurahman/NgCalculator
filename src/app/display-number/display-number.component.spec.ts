import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayNumberComponent } from './display-number.component';

describe('DisplayNumberComponent', () => {
  let component: DisplayNumberComponent;
  let fixture: ComponentFixture<DisplayNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
