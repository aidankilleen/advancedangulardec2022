import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Member } from './member.model';
import { MemberService } from './member.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Prime NG Rest Frontend</h1>

    <button 
      (click)="onAdd()"
      pButton pRipple type="button" 
      icon="pi pi-user-plus" 
      class="p-button-rounded p-button-success">
    </button>

    <member-table [members]="members"></member-table>

    <p-toast></p-toast>

    <p-dialog header="Add User" [(visible)]="displayDialog" position="top">
      
      <div class="field">
        <label>Name</label>
        <input pInputText type="text" [(ngModel)]="editingMember.name"><br>
      </div>
      <div class="field">
        <label>Email</label>
        <input pInputText type="text" [(ngModel)]="editingMember.email"><br>
      </div>
      <div class="field-checkbox">
        <label>Active</label>
        <p-checkbox type="checkbox" [binary]="true" [(ngModel)]="editingMember.active"></p-checkbox>
      </div>


      <ng-template pTemplate="footer">
      <button 
        pButton pRipple type="button" 
        label="Save" 
        class="p-button-success"
        (click)="onSave()"></button>
      <button 
        pButton pRipple type="button" 
        label="Cancel" 
        class="p-button-secondary"
        (click)="displayDialog = false"></button>
      </ng-template>




    </p-dialog>



    <!--
    {{ members | json }}
    -->
    <!--
    <ul>
      <li *ngFor="let member of members" (click)="onClick(member.id)">
        {{ member.name }}

        <button (click)="onDelete(member.id)">Delete</button>
      </li>
    </ul>
-->
    
  
  `,
  providers: [ MessageService, ConfirmationService ], 
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prime-ng-investigation';
  activeState: boolean[] = [true, false, false];
  displayDialog = false;

  members: Member[] = [];

  editingMember: Member = new Member();



  constructor(public memberService: MemberService, 
              public messageService:MessageService, 
              public confirmationService: ConfirmationService) {
  }

  

  ngOnInit(): void {
    this.memberService.getMembers()
    .subscribe(data => {
      this.members = data;
    });
  }

  onAdd() {
    this.editingMember = new Member();
    this.displayDialog = true;
    /*
    let userToAdd = new Member(-1, "NEW MEMBER", "new.member@gmail.com", false);

    
    */
  }
  onSave() {
    this.memberService.addMember(this.editingMember)
    .subscribe(addedMember => {
      this.members.push(addedMember);
      this.displayDialog = false;

      this.messageService.add({
        severity:'success', 
        summary:'Added', detail:`New member added: ${ addedMember.id }`});
    });
  }


  

  onClick(id: number) {
    this.memberService.getMember(id)
      .subscribe(member => alert(JSON.stringify(member)));
  }

  toggle(index: number) {
    this.activeState[index] = !this.activeState[index];
  }
}
