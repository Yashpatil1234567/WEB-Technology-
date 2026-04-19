import { Component, signal } from '@angular/core';
import { TodosComponent } from './Mycomponents/todo/todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodosComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('my-app');
}
