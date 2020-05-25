import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceBaseComponent } from './e-commerce-base.component';

describe('ECommerceBaseComponent', () => {
  let component: ECommerceBaseComponent;
  let fixture: ComponentFixture<ECommerceBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECommerceBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECommerceBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
