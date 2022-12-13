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
      <input 
        class="form-control" 
        [(ngModel)]="editingUser.name" 
        name="name" 
        required
        minlength="4"
        maxlength="20"
        #name="ngModel">
      <div 
        *ngIf="name.invalid && (name.dirty || name.touched)"
        class="alert alert-warning">
        <div *ngIf="name.errors?.['required']">Name is required</div>
        <div *ngIf="name.errors?.['minlength']">
          Name must be {{ name.errors?.['minlength'].requiredLength }} characters long
        </div>
      </div>

      <label class="form-label" for="email">Email</label>
      <input 
        class="form-control" 
        [(ngModel)]="editingUser.email" 
        name="email" 
        email
        #email="ngModel"
        required>
      <div *ngIf="email.invalid && (email.dirty || email.touched)" class="alert alert-warning">
        <div *ngIf="email.errors?.['required']">Email is required</div>
        <div *ngIf="email.errors?.['email']">"{{email.value}}" is not a valid email</div>
      </div>

      <label class="form-check-label" for="active">Active</label>
      <input type="checkbox" 
             class="form-check-input" 
             name="active" 
             [(ngModel)]="editingUser.active"><br>

      <label class="form-label" for="yearsExperience">Years Experience</label>
      <input 
        type="number"
        class="form-control" 
        [(ngModel)]="editingUser.yearsExperience" 
        name="yearsExperience"
        min="1" max="50"
        #yearsExperience="ngModel">
      <div class="alert alert-warning" 
        *ngIf="yearsExperience.invalid">
        <div *ngIf = "yearsExperience.errors?.['max']">
          Too big - maximum value is {{ yearsExperience.errors?.['max'].max }}
        </div>
        <div *ngIf = "yearsExperience.errors?.['min']">
          Too small minimum value is {{ yearsExperience.errors?.['min'].min }}
        </div>

      </div>
      


      <button 
        class="btn btn-primary" type="submit" 
        [disabled]="frmUser.invalid">Submit</button>
    </form>
    <hr>
    {{ frmUser.invalid }}<br>

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
                                this.user.active, 
                                this.user.yearsExperience);
  }
  onSubmit(frmUser: NgForm) {
    console.log(frmUser);
    console.log(frmUser.value);
    this.userChange.emit(frmUser.value);
  }




}
