import { Component } from '@angular/core';

@Component({
  selector: 'wrapper',
  template: `
    <div>
      <h2>Wrapper</h2>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent {

}
