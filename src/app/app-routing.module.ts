import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from 'src/app/product-list/product-list.component';
import { ProductDetailsComponent } from 'src/app/product-details/product-details.component';
import { CartComponent } from 'src/app/cart/cart.component';
import { ShippingComponent } from 'src/app/shipping/shipping.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'products/:productId',
    component: ProductDetailsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'shipping',
    component: ShippingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
