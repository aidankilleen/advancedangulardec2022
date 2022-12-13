import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    Name: <input [value]="name" (keyup)="onChange(txtName.value)" #txtName>
  	<button (click)="name = ''">Reset</button>
    <hr>
    {{ name }}
    <hr>

    County:<input [(ngModel)] = "county">
    <button (click)="county = 'Cork'">Reset</button><br>
    <hr>
    {{ county }}
    <hr>

    <input type="number" [(ngModel)]="a"><br>
    <input type="number" [(ngModel)]="b"><br>
    <hr>
    <input type="number" [value]="a + b" readonly><br>

    <hr>

    <name-editor 
      [name]="name"
      (nameChange)="onNameChange($event)">
    </name-editor>

    <hr>

    <name-editor [(name)]="name">
    </name-editor>

    <hr>

    <user-editor [(user)]="user">

    </user-editor>
    {{ user | json }}

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms investigation';

  user: User = new User(1, "Alice", "alice@gmail.com", true);

  onNameChange(name: string) {
    //alert(`name changed: ${name}`);
    this.name = name;
  }




  a = 10;
  b = 20;


  name = "Aidan";
  county = "Cork";

  onChange(name: string) {
    this.name = name;
  }

}
