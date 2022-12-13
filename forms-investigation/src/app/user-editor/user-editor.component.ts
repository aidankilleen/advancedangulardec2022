import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'user-editor',
  template: `
    <div>
      <label>Id</label>
      <input [value]="editingUser.id" readonly><br>
      <label>Name</label>
      <input [(ngModel)]="editingUser.name"><br>
      <label>Email</label>
      <input [(ngModel)]="editingUser.email"><br>
      <label>Active</label>
      <input type="checkbox" [(ngModel)]="editingUser.active"><br>

      <button (click)="onSave()">Save</button>
    </div>
    {{ editingUser | json }}
    <hr>
  `,
  styleUrls: ['./user-editor.component.css']
})
export class UserEditorComponent implements OnInit {

  @Input() user!: User;
  @Output() userChange = new EventEmitter();

  editingUser: User = new User();

  ngOnInit(): void {
    this.editingUser = new User(this.user.id, 
                                this.user.name, 
                                this.user.email, 
                                this.user.active);
  }
  onSave() {
    this.userChange.emit(
        new User(this.editingUser.id, 
                 this.editingUser.name, 
                 this.editingUser.email, 
                 this.editingUser.active));
  }

}
