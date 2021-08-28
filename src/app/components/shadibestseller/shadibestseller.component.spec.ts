import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadibestsellerComponent } from './shadibestseller.component';

describe('ShadibestsellerComponent', () => {
  let component: ShadibestsellerComponent;
  let fixture: ComponentFixture<ShadibestsellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadibestsellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadibestsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
