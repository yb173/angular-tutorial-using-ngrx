import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/cart.service';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-details',
  styleUrls: ['./product-details.component.css'],
  template: `
    <h2>Product Details</h2>

    <div *ngIf="product$ | async">
      <h3>{{ (product$ | async)?.name }}</h3>
      <h4>{{ (product$ | async)?.price | currency }}</h4>
      <p>{{ (product$ | async)?.description }}</p>

      <button (click)="addToCart()">Buy</button>
    </div>
  `,
})
export class ProductDetailsComponent implements OnInit {
  product$: Observable<Product>;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product$ = this.productService.getProduct(+params.get('productId'));
    });
    this.product$.subscribe(product => {
      this.product = product;
    });
  }

  addToCart(): void {
    this.cartService.addToCart(this.product);
    window.alert('Your product has been added to the cart!');
  }
}
