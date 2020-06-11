import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-name',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./name.component.css'],
  template: `
    <div [formGroup]="parent">
      <label for="name">
        Name
      </label>
      <input id="name" type="text" formControlName="name">
    </div>
  `,
})
export class NameComponent {
  @Input() parent: FormGroup;
}
