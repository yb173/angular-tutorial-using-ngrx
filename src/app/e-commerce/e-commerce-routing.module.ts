import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  ProductListComponent,
  ProductDetailsPageComponent,
  CartPageComponent,
  ShippingComponent,
  ECommerceBaseComponent,
} from './containers';

const routes: Routes = [
  {
    path: '',
    component: ECommerceBaseComponent,
    children: [
      {
        path: '',
        component: ProductListComponent
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
        component: ShippingComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ECommerceRoutingModule { }
