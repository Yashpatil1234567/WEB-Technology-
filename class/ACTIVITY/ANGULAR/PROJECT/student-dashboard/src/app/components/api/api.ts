import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p *ngIf="loading">Loading...</p>

    <ul *ngIf="!loading">
      <li *ngFor="let u of users">
        {{u.name}} - {{u.email}}
      </li>
    </ul>
  `
})
export class ApiComponent implements OnInit {

  users:any[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(data => {
        this.users = data;
        this.loading = false;
      });
  }
}