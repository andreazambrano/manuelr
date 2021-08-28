import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadimostwantedComponent } from './shadimostwanted.component';

describe('ShadimostwantedComponent', () => {
  let component: ShadimostwantedComponent;
  let fixture: ComponentFixture<ShadimostwantedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadimostwantedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadimostwantedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
