import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: User[] = [
    new User(1, "Alice", "alice@gmail.com", true ), 
    new User(2, "Bob", "bob@gmail.com", false ), 
    new User(3, "Carol", "carol@gmail.com", true ), 
    new User(4, "Dan", "dan@gmail.com", false ), 
    new User(5, "Eve", "eve@gmail.com", true ) 
  ];

  constructor() { }

  getUsers(): User[] {

    return this.users;
  }

  getUser(id: number): User | undefined {

    let user:User | undefined = this.users.find(u => u.id == id);
    return user;
  }


}
