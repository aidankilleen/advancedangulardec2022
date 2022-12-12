import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'test-component',
  template: `
    <h1>Understanding Undefined Values</h1>



    {{ user | json }}<br>


    {{ user?.name }} <br>

    {{ user ? user.name : undefined }}<br>

    <button (click)="onCreateUser()">Create User</button>
    <button (click)="onModifyUser()">Modify User</button>
  `,
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
 
  public name?: string;
  public user?: User;

  constructor() {
    //this.user = new User();
  }
  ngOnInit(): void {
    this.onCreateUser();
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
