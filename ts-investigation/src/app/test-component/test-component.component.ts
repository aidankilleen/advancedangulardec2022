import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'test-component',
  template: `
    <h1>Understanding Undefined Values</h1>
<!--
    <button (click)="onCreateUser()">Create User</button>
    <button (click)="onModifyUser()">Modify User</button>
-->
    <hr>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
        </tr>    
      </thead>
      <tbody>
        <tr *ngFor="let user of users" (click)="onRowClicked(user.id)">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.active ? "Active" : "Inactive" }}</td>
        </tr>
      </tbody>
    </table>

    <table>
      <tr>
        <td>ID</td><td>{{ user?.id }}</td>
      </tr>
      <tr>
        <td>Name</td><td>{{ user?.name }}</td>
      </tr>
      <tr>
        <td>Email</td><td>{{ user?.email }}</td>
      </tr>
      <tr>
        <td>Active</td><td>{{ user?.active ? "Active" : "Inactive" }}</td>
      </tr>
    </table>

    <hr>

    <table *ngIf="user">
      <tr>
        <td>ID</td><td>{{ user!.id }}</td>
      </tr>
      <tr>
        <td>Name</td><td>{{ user!.name }}</td>
      </tr>
      <tr>
        <td>Email</td><td>{{ user!.email }}</td>
      </tr>
      <tr>
        <td>Active</td><td>{{ user!.active ? "Active" : "Inactive" }}</td>
      </tr>
    </table>





    
  `,
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
 
  public name?: string;
  //public user: User | undefined;
  public user?: User;

  public users: User[];

  constructor(public userService: UserService) {

    this.users = this.userService.getUsers();
    //this.user = new User();
  }
  onRowClicked(id: number) {


    //let u:User | undefined;

    this.user = this.userService.getUser(id);

    //alert(JSON.stringify(this.user));

  }

  ngOnInit(): void {
    //this.onCreateUser();
  }

  onCreateUser() {
    this.user = new User(1, "Alice", "alice@gmail.com", true);
  }

  onModifyUser() {
    this.user!.name = "Fred"; // turns off compiler error just for this line - this.user possibly not defined
  }

  doSomething() {

    //this.user?.name = "Fred";

    if (this.name == "Aidan") {

    }
    // this.name = 99;


  }


}
