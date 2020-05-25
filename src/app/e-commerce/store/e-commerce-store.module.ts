import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromECommerce from './reducers';
import { ECommerceEffects } from './effects';

import { ECommerceFacade } from './e-commerce.facade';

@NgModule({
  imports: [
    StoreModule.forFeature(fromECommerce.featureKey, fromECommerce.reducer),
    EffectsModule.forFeature([ECommerceEffects]),
  ],
  providers: [
    ECommerceFacade
  ]
})
export class ECommerceStoreModule { }
