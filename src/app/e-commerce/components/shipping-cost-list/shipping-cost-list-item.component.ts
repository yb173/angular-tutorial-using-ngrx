import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-shipping-cost-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./shipping-cost-list-item.component.scss'],
  template: `
    <span>{{ type }}</span>
    <span>{{ price | currency }}</span>
  `,
})
export class ShippingCostListItemComponent {
  @Input() type: string;
  @Input() price: number;
}
