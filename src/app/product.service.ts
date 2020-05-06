import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * 製品一覧を取得します．
   * @return 製品情報一覧の Observable
   */
  getProducts(): Observable<Product[]> {
    return this.http.get('/assets/products.json').pipe(
      map((res) => res as Product[])
    );
  }

  /**
   * 製品 ID に紐づく製品情報を取得します．
   * @param productId 製品 ID
   * @return 製品情報の Observable
   */
  getProduct(productId: number): Observable<Product> {
    let url: string;
    switch (productId) {
      case 1:
        url = '/assets/product_1.json';
        break;
      case 2:
        url = '/assets/product_2.json';
        break;
      case 3:
        url = '/assets/product_3.json';
        break;
      default:
        break;
    }
    return this.http.get(url).pipe(
      map((res) => res as Product)
    );
  }
}
