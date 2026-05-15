import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-api-integration',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <h3>API Integration</h3>
      
      <div *ngIf="loading">Loading users...</div>
      
      <ul *ngIf="!loading">
        <li *ngFor="let user of users">
          <strong>{{ user.name }}</strong> ({{ user.email }})
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .card { border: 1px solid #ccc; padding: 15px; border-radius: 8px; max-height: 300px; overflow-y: auto; }
    ul { list-style-type: none; padding: 0; }
    li { padding: 5px 0; border-bottom: 1px solid #eee; }
  `]
})
export class ApiIntegrationComponent implements OnInit {
  users: User[] = [];
  loading = true;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => {
          this.users = data;
          this.loading = false;
        },
        error: (err) => {
          console.error('Error fetching users', err);
          this.loading = false;
        }
      });
  }
}
