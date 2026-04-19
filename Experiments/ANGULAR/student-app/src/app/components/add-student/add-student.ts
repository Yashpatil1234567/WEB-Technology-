import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../services/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-student.html',
  styleUrls: ['./add-student.css']
})
export class AddStudentComponent {

  name: string = '';
  age: number = 0;

  constructor(private studentService: StudentService, private router: Router) {}

  addStudent() {
    if (this.name && this.age) {
      this.studentService.addStudent({
        name: this.name,
        age: this.age
      });

      this.router.navigate(['/']);
    }
  }
}