import { Component } from '@angular/core';

@Component({
  selector: 'app-student-card',
  standalone: true,
  template: `
    <img [src]="img" width="100">
    <h3>{{name}}</h3>
    <p>{{course}}</p>
    <button (click)="change()">Change</button>
  `
})
export class StudentCardComponent {
  name = "Yash";
  course = "AIML";
  img = "https://via.placeholder.com/100";

  change() {
    this.img = "https://via.placeholder.com/100/ff0000";
  }
}