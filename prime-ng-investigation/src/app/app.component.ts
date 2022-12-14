import { Component, OnInit } from '@angular/core';
import { Member } from './member.model';
import { MemberService } from './member.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Prime NG Rest Frontend</h1>

    <p-table [value]="members" dataKey="id">

      <ng-template pTemplate="header">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
        </tr>
      </ng-template>

      <ng-template pTemplate="body" let-member let-editing="editing">

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
          <td>{{ member.email }}</td>
          <td>{{ member.active }}</td>
          <td>
          <div class="flex align-items-center justify-content-center gap-2">
              <button *ngIf="!editing" pButton pRipple type="button" pInitEditableRow icon="pi pi-pencil" (click)="onRowEditInit(member)" class="p-button-rounded p-button-text"></button>
              <button *ngIf="editing" pButton pRipple type="button" pSaveEditableRow icon="pi pi-check" (click)="onRowEditSave(member)" class="p-button-rounded p-button-text p-button-success mr-2"></button>
              <button *ngIf="editing" pButton pRipple type="button" pCancelEditableRow icon="pi pi-times" (click)="onRowEditCancel(member)" class="p-button-rounded p-button-text p-button-danger"></button>
          </div>
          </td>
        </tr>

      </ng-template>


    </p-table>
    <!--
    <ul>
      <li *ngFor="let member of members" (click)="onClick(member.id)">
        {{ member.name }}

        <button (click)="onDelete(member.id)">Delete</button>
      </li>
    </ul>
-->
    <button (click)="onAdd()">Add User</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'prime-ng-investigation';
  activeState: boolean[] = [true, false, false];

  members: Member[] = [];

  constructor(public memberService: MemberService) {
  }

  onRowEditInit(member: Member) {

  }
  onRowEditSave(member: Member) {

  }
  onRowEditCancel(member: Member) {

  }

  ngOnInit(): void {
    this.memberService.getMembers()
    .subscribe(data => {
      this.members = data;
    });
  }

  onAdd() {
    let userToAdd = new Member(-1, "NEW MEMBER", "new.member@gmail.com", false);

    this.memberService.addMember(userToAdd)
      .subscribe(addedMember => {
        this.members.push(addedMember);
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
