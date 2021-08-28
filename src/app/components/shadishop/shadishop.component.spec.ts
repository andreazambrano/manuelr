import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadishopComponent } from './shadishop.component';

describe('ShadishopComponent', () => {
  let component: ShadishopComponent;
  let fixture: ComponentFixture<ShadishopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadishopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadishopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
