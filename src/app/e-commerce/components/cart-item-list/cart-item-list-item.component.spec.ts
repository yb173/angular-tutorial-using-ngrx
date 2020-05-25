import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemListItemComponent } from './cart-item-list-item.component';

describe('CartItemListItemComponent', () => {
  let component: CartItemListItemComponent;
  let fixture: ComponentFixture<CartItemListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartItemListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
