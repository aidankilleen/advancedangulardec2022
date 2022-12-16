import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { AuthApiService } from './auth-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private authApiService: AuthApiService) { 
    this._isLoggedIn$.next(false);
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
  }
}
