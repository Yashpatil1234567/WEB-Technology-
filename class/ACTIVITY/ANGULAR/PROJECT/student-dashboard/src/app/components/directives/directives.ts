import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="show=!show">Toggle</button>

    <div *ngIf="show">Hello</div>

    <ul>
      <li *ngFor="let s of students">{{s}}</li>
    </ul>
  `
})
export class DirectivesComponent {
  show = true;
  students = ["Yash", "Rahul"];
}