import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: any[] = [];

  getStudents() {
    return this.students;
  }

  addStudent(student: any) {
    this.students.push(student);
  }
}