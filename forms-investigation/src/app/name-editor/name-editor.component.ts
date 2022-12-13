import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'name-editor',
  template: `
    <div>
      <label>Name</label>
      <input [ngModel]="name" (keyup)="onKeyUp(txtName.value)" #txtName><br>

      {{ name }}
    </div>
  `,
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {

  @Input() name = "";
  @Output() nameChange = new EventEmitter();

  onKeyUp(name: string) {
    this.name = name;
    this.nameChange.emit(this.name);
  }
}
