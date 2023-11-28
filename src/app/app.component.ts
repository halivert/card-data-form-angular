import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFormComponent } from './card-form/card-form.component';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardFormComponent, NgxMaskDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cardData';
}
