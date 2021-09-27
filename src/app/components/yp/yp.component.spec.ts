import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YpComponent } from './yp.component';

describe('YpComponent', () => {
  let component: YpComponent;
  let fixture: ComponentFixture<YpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
