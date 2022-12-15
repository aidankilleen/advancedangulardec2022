import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'home-page',
  template: `
    <p>
      {{ isLoggedIn ? "You are logged In" : "You are logged out"}}
    </p>
  `,
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  isLoggedIn = false;

  constructor(public authService: AuthService) {

  }

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    })
  }

}
