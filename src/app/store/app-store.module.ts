import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from 'src/environments/environment';
import { reducers, metaReducers } from './reducers';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
      }
    }),

    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
    }),

    StoreDevtoolsModule.instrument({
      name: 'Angular Tutorial Using NgRx App',
      logOnly: environment.production,
    }),

    EffectsModule.forRoot([]),
  ],
})
export class AppStoreModule { }
