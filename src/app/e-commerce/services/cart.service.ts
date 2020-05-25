import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ShippingCost } from 'src/app/e-commerce/models/shipping-cost.model';

@Injectable()
export class CartService {

  constructor(
    private http: HttpClient
  ) {}

  /**
   * 配送量一覧を取得します．
   * @return 配送料一覧の Observable
   */
  loadShippingCosts(): Observable<ShippingCost[]> {
    return this.http.get('/assets/shippings.json').pipe(
      map((res) => res as ShippingCost[])
    );
  }
}
