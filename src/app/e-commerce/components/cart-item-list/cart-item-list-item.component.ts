import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cart-item-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./cart-item-list-item.component.scss'],
  template: `
    <span>{{ name }}</span>
    <span>{{ price }}</span>
  `,
})
export class CartItemListItemComponent {
  @Input() name: string;
  @Input() price: number;
}
