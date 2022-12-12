import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title | titlecase }}</h1>




    
    <accordion>
      <accordion-panel title="Panel 1">
        <h3>Wrapper</h3>
        <p>This is wrapped content</p>
      </accordion-panel>
      <accordion-panel title="Panel 2">
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
      </accordion-panel>
      <accordion-panel title="Panel 3">
        <img src="assets/dog.jpg" width="200">
      </accordion-panel>
    </accordion>
    

<!--
    <wrapper>
      <h1>Wrapper</h1>
      <p>This is wrapped content</p>
    </wrapper>


    <wrapper>
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    </wrapper>

    <wrapper>

      <img src="assets/dog.jpg" width="200">

    </wrapper>
-->

  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ts investigation';
}
