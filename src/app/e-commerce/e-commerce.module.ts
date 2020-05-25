import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {
  TopBarComponent,
  ProductDetailsComponent,
  CartItemListComponent,
  CartItemListItemComponent,
} from './components';

import {
  ProductListComponent,
  ProductAlertsComponent,
  ProductDetailsPageComponent,
  CartPageComponent,
  ShippingComponent,
  ECommerceBaseComponent,
} from './containers';

import { ECommerceStoreModule } from './store/e-commerce-store.module';
import { ECommerceRoutingModule } from './e-commerce-routing.module';

import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';


export const COMPONENTS = [
  TopBarComponent,
  ProductDetailsComponent,
  CartItemListComponent,
  CartItemListItemComponent,
];

export const CONTAINERS = [
  ECommerceBaseComponent,
  ProductListComponent,
  ProductAlertsComponent,
  ProductDetailsPageComponent,
  CartPageComponent,
  ShippingComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // RouterModule,

    // Routing
    ECommerceRoutingModule,

    // NgRx
    ECommerceStoreModule,
  ],
  declarations: [
    COMPONENTS,
    CONTAINERS,
  ],
  providers: [
    CartService,
    ProductService,
  ]
})
export class ECommerceModule { }
