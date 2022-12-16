import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { AuthApiService } from './auth-api.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  user:any; // TBD - put a proper type

  constructor(private authApiService: AuthApiService) { 

    // check local storage for a valid token
    //let token = localStorage.getItem("ang_auth");

    if (this.token) {
      // TBD - check the expiry date of the token

      this._isLoggedIn$.next(true);

    } else {
      this._isLoggedIn$.next(false);
    }
  }

  get token() {
    return localStorage.getItem("ang_auth");
  }

  login(username: string, password: string) {

    // TBD - get rid of any and replace with a proper type.
    return this.authApiService.login(username, password)
      .pipe(
        tap((response:any) => {
          console.log("****Auth Api Returned!!!")
          console.log(response);
          this._isLoggedIn$.next(true);

          localStorage.setItem("ang_auth", response.access_token);

          /*
          debugger;
          let u = this.getUser();
          console.log(u);
          */

        }
      )
    )
  }
  /*
  login(username: string, password: string) {
    if(username == 'aidan' && password == 'password') {

      this._isLoggedIn$.next(true);
    }
  } 
  */

  logout() {
    this._isLoggedIn$.next(false);
    localStorage.removeItem("ang_auth");
  }

  getUser(): User | undefined {

    if (!this.token) {
      return undefined;
    }
    console.log(this.token);
    let pieces = this.token?.split('.');
    let u: User = JSON.parse(atob(pieces![1]));
    return u;
  }

}
