import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from 'src/app/app-routing.module';

import { AppStoreModule } from 'src/app/store/app-store.module';

import { CoreModule } from './core/core.module';
import { AppComponent } from 'src/app/core/containers';


@NgModule({
  imports: [
    // Angular
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    //
    CoreModule,

    // Routing
    AppRoutingModule,

    // NgRx
    AppStoreModule,
  ],
  declarations: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
