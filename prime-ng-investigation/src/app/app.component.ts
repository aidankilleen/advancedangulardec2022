import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
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

    <p-table [value]="members" dataKey="id" editMode="row">

      <ng-template pTemplate="header">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
          <th>&nbsp;</th>
        </tr>
      </ng-template>

      <ng-template pTemplate="body" let-member let-editing="editing" let-ri="rowIndex">

        <tr [pEditableRow]="member">
          <td>{{ member.id }}</td>
          
          <td>
            <p-cellEditor>
              <ng-template pTemplate="input">
                <input pInputText type="text" [(ngModel)]="member.name" required>
              </ng-template>
              <ng-template pTemplate="output">
                {{ member.name }}
              </ng-template>
            </p-cellEditor>


          </td>
          <td>
            <p-cellEditor>
              <ng-template pTemplate="input">
                <input pInputText type="text" [(ngModel)]="member.email" required>
              </ng-template>
              <ng-template pTemplate="output">
                {{ member.email }}
              </ng-template>
            </p-cellEditor>

          </td>
          <td>
            <p-cellEditor>
              <ng-template pTemplate="input">
                <input type="checkbox" [(ngModel)]="member.active">
              </ng-template>
              <ng-template pTemplate="output">
                {{ member.active ? "Active" : "Inactive" }}
              </ng-template>
            </p-cellEditor>
          </td>
          <td>
          <div class="flex align-items-center justify-content-center gap-2">
              <button *ngIf="!editing" 
                  pButton pRipple 
                  type="button" 
                  pInitEditableRow 
                  icon="pi pi-pencil" 
                  (click)="onRowEditInit(member)" 
                  class="p-button-rounded p-button-text">
                </button>
              <button *ngIf="editing" pButton pRipple type="button" pSaveEditableRow icon="pi pi-check" (click)="onRowEditSave(member)" class="p-button-rounded p-button-text p-button-success mr-2"></button>
              <button *ngIf="editing" 
                pButton pRipple type="button" 
                pCancelEditableRow icon="pi pi-times" 
                (click)="onRowEditCancel(member, ri)" 
                class="p-button-rounded p-button-text p-button-danger"></button>
          </div>
          </td>
        </tr>

      </ng-template>


    </p-table>
    <p-toast></p-toast>

    <p-dialog header="Add User" [(visible)]="displayDialog">
      
      <label>Name</label>
      <input type="text" [(ngModel)]="editingMember.name"><br>
      <label>Email</label>
      <input type="text" [(ngModel)]="editingMember.email"><br>
      <label>Active</label>
      <input type="checkbox" [(ngModel)]="editingMember.active"><br>


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
  providers: [ MessageService ], 
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prime-ng-investigation';
  activeState: boolean[] = [true, false, false];
  displayDialog = false;

  members: Member[] = [];

  editingMember: Member = new Member();

  clonedMembers: {[id:number]: Member;} = {};

  constructor(public memberService: MemberService, public messageService:MessageService) {
  }

  onRowEditInit(member: Member) {
    this.clonedMembers[member.id] = { ...member };
    
  }
  onRowEditSave(member: Member) {

    // write changes to backend
    this.memberService.updateMember(member)
      .subscribe(updatedMember=>{
        this.messageService.add({
          severity:'success', 
          summary:'Saved', detail:'Member changes saved'});
      })

  }
  onRowEditCancel(member: Member, index: number) {
    this.members[index] = this.clonedMembers[member.id];
    delete this.clonedMembers[member.id];
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
    });
  }


  onDelete(id: number) {
    this.memberService.deleteMember(id)
      .subscribe(()=>{
        // remove this member from the members array
        let index = this.members.findIndex(member => member.id == id);
        this.members.splice(index, 1);

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
