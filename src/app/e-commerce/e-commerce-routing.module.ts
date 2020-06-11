import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  ProductListPageComponent,
  ProductDetailsPageComponent,
  CartPageComponent,
  ShippingPageComponent,
  ECommerceBaseComponent,
} from './containers';

const routes: Routes = [
  {
    path: '',
    component: ECommerceBaseComponent,
    children: [
      {
        path: '',
        component: ProductListPageComponent
      },

      {
        path: 'products/:productId',
        component: ProductDetailsPageComponent
      },
      {
        path: 'cart',
        component: CartPageComponent
      },
      {
        path: 'shipping',
        component: ShippingPageComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ECommerceRoutingModule { }
