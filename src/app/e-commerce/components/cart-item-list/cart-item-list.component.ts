import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cart-item-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./cart-item-list.component.scss'],
  template: `
    <ng-content></ng-content>
  `,
})
export class CartItemListComponent {}
