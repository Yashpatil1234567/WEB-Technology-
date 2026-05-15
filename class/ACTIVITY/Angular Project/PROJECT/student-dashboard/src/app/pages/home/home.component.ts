import { Component } from '@angular/core';
import { StudentCardComponent } from '../../components/student-card/student-card.component';
import { LiveInputComponent } from '../../components/live-input/live-input.component';
import { DirectivesDemoComponent } from '../../components/directives-demo/directives-demo.component';
import { ApiIntegrationComponent } from '../../components/api-integration/api-integration.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    StudentCardComponent, 
    LiveInputComponent, 
    DirectivesDemoComponent, 
    ApiIntegrationComponent
  ],
  template: `
    <h1>Home Page</h1>
    <div class="components-container">
      <app-student-card></app-student-card>
      <app-live-input></app-live-input>
      <app-directives-demo></app-directives-demo>
      <app-api-integration></app-api-integration>
    </div>
  `,
  styles: [`
    .components-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      padding: 20px;
    }
  `]
})
export class HomeComponent {}
