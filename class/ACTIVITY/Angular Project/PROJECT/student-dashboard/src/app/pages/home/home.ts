import { Component } from '@angular/core';

import { StudentCardComponent } from '../../components/student-card/student-card';
import { LiveInputComponent } from '../../components/live-input/live-input';
import { DirectivesComponent } from '../../components/directives/directives';
import { ApiComponent } from '../../components/api/api';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    StudentCardComponent,
    LiveInputComponent,
    DirectivesComponent,
    ApiComponent
  ],
  templateUrl: './home.html'
})
export class HomeComponent {}