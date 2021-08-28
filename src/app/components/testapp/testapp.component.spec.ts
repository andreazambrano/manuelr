import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestappComponent } from './testapp.component';

describe('TestappComponent', () => {
  let component: TestappComponent;
  let fixture: ComponentFixture<TestappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
