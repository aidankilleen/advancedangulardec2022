import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'intro-form',
  template: `
    <form (ngSubmit)="onSubmit(frmUser)" #frmUser="ngForm">
      <label class="form-label" for="id">Id</label>
      <input class="form-control" [(ngModel)]="editingUser.id" name="id" readonly>

      <label class="form-label" for="name">Name</label>
      <input class="form-control" [(ngModel)]="editingUser.name" name="name">

      <label class="form-label" for="email">Email</label>
      <input class="form-control" [(ngModel)]="editingUser.email" name="email" type="email">

      <label class="form-check-label" for="active">Active</label>
      <input type="checkbox" 
             class="form-check-input" 
             name="active" 
             [(ngModel)]="editingUser.active">

      <button class="btn btn-primary" type="submit">Submit</button>
    </form>
    <hr>
    {{ editingUser | json }}
  `,
  styleUrls: ['./intro-form.component.css']
})
export class IntroFormComponent implements OnInit {

  @Input() user!: User;
  editingUser!: User;

  @Output() userChange = new EventEmitter();

  ngOnInit(): void {
    this.editingUser = new User(this.user.id, 
                                this.user.name, 
                                this.user.email, 
                                this.user.active);
  }
  onSubmit(frmUser: NgForm) {
    console.log(frmUser);
    console.log(frmUser.value);
    this.userChange.emit(frmUser.value);
  }




}
