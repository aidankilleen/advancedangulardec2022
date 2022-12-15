import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login-page',
  template: `
    
    <div *ngIf="!(authService.isLoggedIn$ | async)">
      <label>Username</label>
      <input type="text" [(ngModel)]="username">

      <label>Password</label>
      <input type="password" [(ngModel)]="password">

      <button (click)="onSubmit()" type="submit">Submit</button>
    </div>
    <div *ngIf="authService.isLoggedIn$ | async">
      <button (click)="onLogout()" type="submit">Logout</button>
    </div>
    
  `,
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  username:string = "";
  password:string = "";

  constructor(public authService: AuthService) {

  }
  onSubmit() {
    this.authService.login(this.username, this.password);
  }
  onLogout() {
    this.authService.logout();
  }

}
