import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-item-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./item-list.component.scss'],
  template: `
    <ng-content></ng-content>
  `,
})
export class ItemListComponent {}
