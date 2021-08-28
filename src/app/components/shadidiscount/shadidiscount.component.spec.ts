import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadidiscountComponent } from './shadidiscount.component';

describe('ShadidiscountComponent', () => {
  let component: ShadidiscountComponent;
  let fixture: ComponentFixture<ShadidiscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadidiscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadidiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
