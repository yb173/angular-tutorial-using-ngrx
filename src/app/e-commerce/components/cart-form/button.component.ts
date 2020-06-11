import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./name.component.css'],
  template: `
    <div [formGroup]="parent">
      <button (click)="onClick()">
        Purchase
      </button>
    </div>
  `,
})
export class ButtonComponent {
  @Input() parent: FormGroup;
  @Output() clickPurchase = new EventEmitter();

  onClick() {
    this.clickPurchase.emit();
  }
}
