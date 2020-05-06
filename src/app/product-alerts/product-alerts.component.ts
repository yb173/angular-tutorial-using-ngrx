import { Component} from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-alerts',
  styleUrls: ['./product-alerts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p *ngIf="product.price > 700">
      <button (click)="onClick()">Notify Me</button>
    </p>
  `,
})
export class ProductAlertsComponent {
  @Input() product: Product;
  @Output() notify = new EventEmitter();

  onClick(): void {
    this.notify.emit();
  }

}
