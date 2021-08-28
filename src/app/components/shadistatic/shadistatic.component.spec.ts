import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadistaticComponent } from './shadistatic.component';

describe('ShadistaticComponent', () => {
  let component: ShadistaticComponent;
  let fixture: ComponentFixture<ShadistaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadistaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadistaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
