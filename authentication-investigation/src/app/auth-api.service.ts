import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  url = "http://localhost:8000/auth";

  constructor(private httpClient: HttpClient) { 

  }

  login(username: string, password: string) {

    return this.httpClient.post(
      `${this.url}/login`, 
      {
        email: username, 
        password
      }, 
      {
        headers:{
          'Content-Type': 'application/json'
        }
      }      
    )
  }
}
