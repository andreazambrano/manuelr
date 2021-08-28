import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadisliderComponent } from './shadislider.component';

describe('ShadisliderComponent', () => {
  let component: ShadisliderComponent;
  let fixture: ComponentFixture<ShadisliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadisliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadisliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
