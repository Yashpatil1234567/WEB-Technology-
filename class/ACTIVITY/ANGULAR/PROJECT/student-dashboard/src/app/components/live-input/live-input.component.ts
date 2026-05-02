import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-live-input',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="card">
      <h3>Live Input</h3>
      <input type="text" [(ngModel)]="inputText" placeholder="Type something...">
      <p>You typed: {{ inputText }}</p>
      <p>Character Count: {{ inputText.length }}</p>
    </div>
  `,
  styles: [`
    .card { border: 1px solid #ccc; padding: 15px; border-radius: 8px; }
    input { padding: 8px; width: 100%; box-sizing: border-box; }
  `]
})
export class LiveInputComponent {
  inputText = '';
}
