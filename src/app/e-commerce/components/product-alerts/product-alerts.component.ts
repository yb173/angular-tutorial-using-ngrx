import { Component} from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./product-alerts.component.css'],
  template: `
    <p *ngIf="price > 700">
      <button (click)="onClick()">Notify Me</button>
    </p>
  `,
})
export class ProductAlertsComponent {
  @Input() price: number;
  @Output() notify = new EventEmitter();

  onClick(): void {
    this.notify.emit();
  }

}
