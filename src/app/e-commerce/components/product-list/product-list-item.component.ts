import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./product-list-item.component.scss'],
  template: `
    <h3>
      <a [title]="name + ' details' " [routerLink]="['/e-commerce/products', productId]">
        {{ name }}
      </a>
    </h3>
    <p *ngIf="description">
      Description: {{ description }}
    </p>
    <button (click)="onClick()">
      Share
    </button>
    <app-product-alerts
      [price]="price"
      (notify)="onNotify()">
    </app-product-alerts>
  `,
})
export class ProcuctListItemComponent {
  @Input() productId: number;
  @Input() name: string;
  @Input() price: number;
  @Input() description: string;
  @Output() share = new EventEmitter();
  @Output() notify = new EventEmitter();

  onClick(): void {
    this.share.emit();
  }

  onNotify(): void {
    this.notify.emit();
  }

}
