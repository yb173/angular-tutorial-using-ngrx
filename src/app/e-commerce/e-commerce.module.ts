import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  AddressComponent,
  ButtonComponent,
  CartFormComponent,
  ItemListComponent,
  ItemListItemComponent,
  NameComponent,
  ProductAlertsComponent,
  ProductDetailsComponent,
  ProductListComponent,
  ProcuctListItemComponent,
  ShippingCostListComponent,
  ShippingCostListItemComponent,
  TopBarComponent,
} from './components';

import {
  CartPageComponent,
  ECommerceBaseComponent,
  ProductDetailsPageComponent,
  ProductListPageComponent,
  ShippingPageComponent,
} from './containers';

import { ECommerceStoreModule } from './store/e-commerce-store.module';
import { ECommerceRoutingModule } from './e-commerce-routing.module';

import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';

export const COMPONENTS = [
  AddressComponent,
  ButtonComponent,
  CartFormComponent,
  ItemListComponent,
  ItemListItemComponent,
  NameComponent,
  ProductAlertsComponent,
  ProductDetailsComponent,
  ProductListComponent,
  ProcuctListItemComponent,
  ShippingCostListComponent,
  ShippingCostListItemComponent,
  TopBarComponent,
];

export const CONTAINERS = [
  ECommerceBaseComponent,
  ProductListPageComponent,
  ProductDetailsPageComponent,
  CartPageComponent,
  ShippingPageComponent,
];

@NgModule({
  imports: [
    // Angular
    CommonModule,
    ReactiveFormsModule,

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
