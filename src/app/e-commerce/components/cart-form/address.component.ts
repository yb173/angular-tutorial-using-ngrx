import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./address.component.css'],
  template: `
    <div [formGroup]="parent">
      <label for="address">
        address
      </label>
      <input id="address" type="text" formControlName="address">
    </div>
  `,
})
export class AddressComponent {
  @Input() parent: FormGroup;
}
