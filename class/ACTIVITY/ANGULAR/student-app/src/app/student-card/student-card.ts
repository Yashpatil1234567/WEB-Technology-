import { Component } from '@angular/core';

@Component({
  selector: 'app-student-card',
  imports: [],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css',
})

name = "Yash Patil";
course = "AIML";
profileImage = "https://via.placeholder.com/150";

changeImage() {
  this.profileImage = "https://via.placeholder.com/150/0000FF/FFFFFF";
}


export class StudentCard {}
s