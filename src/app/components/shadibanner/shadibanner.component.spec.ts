import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadibannerComponent } from './shadibanner.component';

describe('ShadibannerComponent', () => {
  let component: ShadibannerComponent;
  let fixture: ComponentFixture<ShadibannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadibannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadibannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
