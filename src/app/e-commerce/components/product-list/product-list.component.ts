import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./product-list.component.scss'],
  template: `
    <ng-content></ng-content>
  `,
})
export class ProductListComponent {}
