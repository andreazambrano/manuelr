import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadicontactComponent } from './shadicontact.component';

describe('ShadicontactComponent', () => {
  let component: ShadicontactComponent;
  let fixture: ComponentFixture<ShadicontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadicontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadicontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
