import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <test-component></test-component>
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ts investigation';
}
