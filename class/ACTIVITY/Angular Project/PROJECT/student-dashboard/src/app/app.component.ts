import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav>
      <a routerLink="/">Home</a> | 
      <a routerLink="/about">About</a> | 
      <a routerLink="/contact">Contact</a>
    </nav>
    <hr>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav { padding: 1rem; background: #f0f0f0; }
    a { text-decoration: none; color: #333; font-weight: bold; margin-right: 10px; }
    a:hover { color: blue; }
  `]
})
export class AppComponent {
  title = 'angular-app';
}
