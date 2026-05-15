import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <h3>Directives Demo</h3>
      <button (click)="toggleList()">Toggle List</button>
      
      <div *ngIf="showList" class="list-container">
        <h4>Items (ngFor)</h4>
        <ul>
          <li *ngFor="let item of items">{{ item }}</li>
        </ul>
      </div>
      <p *ngIf="!showList">List is hidden (ngIf)</p>
    </div>
  `,
  styles: [`
    .card { border: 1px solid #ccc; padding: 15px; border-radius: 8px; }
    button { padding: 8px 12px; margin-bottom: 10px; cursor: pointer; }
    .list-container { margin-top: 10px; }
  `]
})
export class DirectivesDemoComponent {
  showList = true;
  items = ['Angular', 'React', 'Vue', 'Svelte'];

  toggleList() {
    this.showList = !this.showList;
  }
}
