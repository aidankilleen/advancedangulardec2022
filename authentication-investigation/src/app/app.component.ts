import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <h2 *ngIf="authService.isLoggedIn$ | async">Logged In</h2>
    <navbar></navbar>
    <hr>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authentication investigation';

  constructor(public authService: AuthService) {

  }
}
