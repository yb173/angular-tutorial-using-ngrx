import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from 'src/app/models/product.model';
import { ShippingCost } from 'src/app/models/shipping-cost.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product: Product): void {
    this.items.push(product);
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }

  /**
   * 配送量一覧を取得します．
   * @return 配送料一覧の Observable
   */
  getShippingPrices(): Observable<ShippingCost[]> {
    return this.http.get('/assets/shippings.json').pipe(
      map((res) => res as ShippingCost[])
    );
  }
}
