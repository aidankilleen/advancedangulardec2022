import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'intro-reactive-form',
  template: `
    <div>
      <input [formControl]="username">{{ username.value }}
    </div>

    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <label class="form-label">Id</label>
      <input class="form-control" type="number" formControlName="id">

      <label class="form-label">Name</label>
      <input class="form-control" type="text" formControlName="name" required>

      <label class="form-label">Email</label>
      <input class="form-control" email formControlName="email">

      <label class="form-check-label">Active</label>
      <input class="form-check-input" type="checkbox" formControlName="active">
      <br>

      <label class="form-label">Years Experience</label>
      <input class="form-control" type="number" formControlName="yearsExperience">

      <label class="form-label">Languages</label>

      <button type="button" (click)="onAddLanguage()">Add Language</button>
      <div formArrayName="languages">
        <div *ngFor="let language of getLanguages().controls; let i=index">
          <label>Language:</label>
          <input id="language-{{i}}" [formControlName]="i">
        </div>
      </div>

      <button class="btn btn-primary" (click)="onModifyClick()">Modify Value</button>
      <button class="btn btn-secondary" (click)="onResetClick()">Reset Values</button>
      <button class="btn btn-success" type="submit" [disabled]="form.invalid">Submit</button>
    </form>

    {{ form.value | json }}
  `,
  styleUrls: ['./intro-reactive-form.component.css']
})
export class IntroReactiveFormComponent implements OnInit {

  username: FormControl<string | null> = new FormControl<string | null>("");

  @Input() user!: User;

  form!: FormGroup;
  /*
  form!: FormGroup<{
    id: FormControl<number>, 
    name: FormControl<string>, 
    email: FormControl<string>, 
    active: FormControl<boolean>, 
    yearsExperience: FormControl<number>, 
    languages: FormArray
  }>;
  */

  constructor(private fb: FormBuilder) {
    
  }
  ngOnInit(): void {

    let languageArray = this.fb.array(this.user.languages.map(language => {
      console.log(language)
      this.fb.control(language)
    }));

    console.log(languageArray);

    this.form = this.fb.group({
      id: this.fb.nonNullable.control(this.user.id), 
      name: this.fb.nonNullable.control(this.user.name), 
      email: this.fb.nonNullable.control(this.user.email), 
      active: this.fb.nonNullable.control(this.user.active), 
      yearsExperience: this.fb.nonNullable.control(this.user.yearsExperience), 
      languages: this.fb.array(
        this.user.languages.map(language => {
          console.log(language)
          return this.fb.control(language)
        }))
    });

    this.form.valueChanges.subscribe(data => {

      console.log("Form Changed:")
      console.log(JSON.stringify(data));

    });



  }

  onAddLanguage() {
    let arr = this.form.get('languages') as FormArray;
    arr.push(this.fb.control(''));
  }


  getLanguages() {
    let languages = this.form.get('languages') as FormArray;
    console.log(languages);
    return languages;
  }


  onModifyClick() {
    this.form.patchValue({
      //id: 2, 
      name: "CHANGED", 
      //email: "changed@gmail.com", 
      active: true
    })
  }
  onResetClick() {
    this.form.reset();
  }
  onSubmit() {
    alert ("submitted");
  }
}
