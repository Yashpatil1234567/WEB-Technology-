import { Component } from '@angular/core';

@Component({
  selector: 'app-student-card',
  standalone: true,
  template: `
    <div class="card">
      <h3>Student Card</h3>
      <img [src]="imageUrl" alt="Student Image" width="100" height="100">
      <p><strong>Name:</strong> {{ name }}</p>
      <p><strong>Course:</strong> {{ course }}</p>
      <button (click)="changeImage()">Change Image</button>
    </div>
  `,
  styles: [`
    .card { border: 1px solid #ccc; padding: 15px; border-radius: 8px; text-align: center; }
    img { border-radius: 50%; margin-bottom: 10px; }
    button { padding: 8px 12px; cursor: pointer; }
  `]
})
export class StudentCardComponent {
  name = 'John Doe';
  course = 'Computer Science';
  imageUrl = 'https://ui-avatars.com/api/?name=John+Doe&background=random';

  changeImage() {
    const randomNum = Math.floor(Math.random() * 100);
    this.imageUrl = `https://ui-avatars.com/api/?name=Student+${randomNum}&background=random`;
  }
}
