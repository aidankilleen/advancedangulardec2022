import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { AccordionPanelComponent } from '../accordion-panel/accordion-panel.component';

@Component({
  selector: 'accordion',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements AfterContentInit {

  @ContentChildren(AccordionPanelComponent) panels?:QueryList<AccordionPanelComponent>;

  ngAfterContentInit(): void {
    // at this point this.panels should have a value

    let s1 = "O'Sullivan";
    let s2 = 'press the "red" button';

    let name = "Aidan";

    let active = true;

    
    let s3 = `
      templated strings cover multiple lines
    
      ${ name }
    
      ${ active ? "Active" : "Inactive" }
    
    `;


    console.log(this.panels);

    this.panels!.last.open = true;

    // add an event handler for each panel toggle event:
    this.panels?.forEach((panel) => {

      panel.toggle.subscribe(()=>{
        //alert(`${ panel.title } was clicked`);

        // close all of the panels
        this.panels?.forEach(p => p.open = false);

        // open the clicked panel
        panel.open = true;
      });
    });
  }  
}
