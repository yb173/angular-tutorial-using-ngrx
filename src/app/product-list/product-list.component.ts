import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  styleUrls: ['./product-list.component.css'],
  template: `
  <h2>Products</h2>

  <div *ngFor="let product of products$ | async">
    <h3>
      <a [title]="product.name + ' details' " [routerLink]="['/products', product.productId]">
        {{ product.name }}
      </a>
    </h3>
    <p *ngIf="product.description">
      Description: {{ product.description }}
    </p>
    <button (click)="share()">
      Share
    </button>
    <app-product-alerts
      [product]="product"
      (notify)="onNotify()">
    </app-product-alerts>
  </div>
  `,
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify(): void {
    window.alert('You will be notified when the product goes on sale');

  }
}
