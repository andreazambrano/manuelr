import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglecourseComponent } from './singlecourse.component';

describe('SinglecourseComponent', () => {
  let component: SinglecourseComponent;
  let fixture: ComponentFixture<SinglecourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglecourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
