import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-live-input',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input [(ngModel)]="text">
    <p>{{text}}</p>
    <p>Count: {{text.length}}</p>
  `
})
export class LiveInputComponent {
  text = "";
}