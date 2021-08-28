import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadicartComponent } from './shadicart.component';

describe('ShadicartComponent', () => {
  let component: ShadicartComponent;
  let fixture: ComponentFixture<ShadicartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadicartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadicartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
