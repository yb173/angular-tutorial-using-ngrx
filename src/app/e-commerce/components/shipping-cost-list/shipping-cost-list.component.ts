import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-shipping-cost-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./shipping-cost-list.component.scss'],
  template: `
    <ng-content></ng-content>
  `,
})
export class ShippingCostListComponent {}
