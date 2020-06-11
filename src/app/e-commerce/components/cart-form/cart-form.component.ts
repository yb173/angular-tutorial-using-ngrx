import { Component, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./cart-form.component.css'],
  template: `
    <form [formGroup]="form">

      <app-name
        [parent]="form">
      </app-name>

      <app-address
        [parent]="form">
      </app-address>

      <app-button
        [parent]="form"
        (clickPurchase)="onClickPurchase()">
      </app-button>
    </form>
  `,
})
export class CartFormComponent {
  @Output() submitForm = new EventEmitter<any>();

  form = this.formBuilder.group({
    name: [''],
    address: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  onClickPurchase(): void {
    this.submitForm.emit(this.form.value);
    this.form.reset();
  }

}
