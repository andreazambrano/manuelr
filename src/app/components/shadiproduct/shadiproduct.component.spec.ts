import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadiproductComponent } from './shadiproduct.component';

describe('ShadiproductComponent', () => {
  let component: ShadiproductComponent;
  let fixture: ComponentFixture<ShadiproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadiproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadiproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
