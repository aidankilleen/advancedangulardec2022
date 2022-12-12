import { Component } from '@angular/core';

@Component({
  selector: 'accordion',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {

}
