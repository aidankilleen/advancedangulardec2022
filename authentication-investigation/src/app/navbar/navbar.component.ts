import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'navbar',
  template: `
    <p-menubar [model]="items"></p-menubar>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.items = [
      { 
        label: 'Home', 
        command: ()=> {
          this.router.navigate(['home']);
        }
      }, 
      {
        label: 'About', 
        command: ()=> {
          this.router.navigate(['about']);
        }
      }, 
      {
        label: 'Contact', 
        command: ()=> {
          this.router.navigate(['contact']);
        }
      }, 
      {
        label: 'Members',
        command: () => {
          this.router.navigate(['members']);
        }
      }, 
      {
        label: 'Dashboard', 
        command: () => {
          this.router.navigate(['dashboard']);
        }
      },
      {
        label: 'Login', 
        command: () => {
          this.router.navigate(['login']);
        }
      }
    ];
  }


}
