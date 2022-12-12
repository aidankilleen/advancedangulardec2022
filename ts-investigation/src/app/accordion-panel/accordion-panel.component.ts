import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'accordion-panel',
  template: `
    <div (click)="onClick()">
      <h2 [ngStyle]="{'background-color': open ? 'lightgreen' : 'lightblue'}"
      >{{ title }}</h2>
      <ng-content *ngIf="open"></ng-content>
    </div>
  `,
  styleUrls: ['./accordion-panel.component.css']
})
export class AccordionPanelComponent {

  @Input() title: string = "";
  @Input() open = false;
  @Output() toggle = new EventEmitter();

  onClick() {
    //this.open = !this.open;
    this.toggle.emit();
  }

}
