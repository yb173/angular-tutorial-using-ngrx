import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-item-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./item-list-item.component.scss'],
  template: `
    <span>{{ name }}</span>
    <span>{{ price }}</span>
  `,
})
export class ItemListItemComponent {
  @Input() name: string;
  @Input() price: number;
}
