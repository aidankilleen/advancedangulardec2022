import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'contact-page',
  template: `
    <p>
      <button (click)="onClickCheckStatus()">Check Login Status</button>
    </p>
  `,
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {

  constructor(public authService: AuthService) {

  }

  onClickCheckStatus() {

    // subscribe will only be notified when the value changes!!!
    //this.authService.isLoggedIn$.subscribe(()=>{})
    
    this.authService.isLoggedIn$.pipe(
      tap(isLoggedIn => {
        // isLoggedIn will contain the current value 

        alert(`IsLoggedIn: ${ isLoggedIn }`);
      })
    ).subscribe((data) => {

      console.log(data);
    });

  }
}
