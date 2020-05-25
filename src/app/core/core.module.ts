import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './containers';

export const COMPONENTS = [
];
export const CONTAINERS = [
  AppComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    COMPONENTS,
    CONTAINERS,
  ],
  exports: [
    COMPONENTS,
    CONTAINERS,
  ],
})
export class CoreModule { }
