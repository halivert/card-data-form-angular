import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  // @ts-expect-error
  @Input() control: FormControl;
  @Input() label = '';

  constructor() {}

  showErrors(): boolean {
    return !!(
      this.control.touched &&
      this.control.dirty &&
      this.control.errors
    );
  }
}
