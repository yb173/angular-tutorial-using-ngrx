import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../models';

@Component({
  selector: 'app-product-details',
  styleUrls: ['./product-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div *ngIf="product">
      <h3>{{ product.name }}</h3>
      <h4>{{ product.price | currency }}</h4>
      <p>{{ product.description }}</p>

      <button (click)="onClick()">Buy</button>
    </div>
  `,
})
export class ProductDetailsComponent {
  @Input() product: Product;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter();

  onClick(): void {
    this.addToCart.emit(this.product);
  }
}
