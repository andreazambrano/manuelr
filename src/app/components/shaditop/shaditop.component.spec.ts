import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaditopComponent } from './shaditop.component';

describe('ShaditopComponent', () => {
  let component: ShaditopComponent;
  let fixture: ComponentFixture<ShaditopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShaditopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShaditopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
