import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadifooterComponent } from './shadifooter.component';

describe('ShadifooterComponent', () => {
  let component: ShadifooterComponent;
  let fixture: ComponentFixture<ShadifooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadifooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadifooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
