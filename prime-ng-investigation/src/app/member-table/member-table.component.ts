import { Component, Input } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'member-table',
  templateUrl: './member-table.component.html',
  styleUrls: ['./member-table.component.css'], 
  providers: [ MessageService, ConfirmationService ]
})
export class MemberTableComponent {

  @Input() members: Member[] = [];

  clonedMembers: {[id:number]: Member;} = {};

  constructor(private memberService: MemberService, 
              private messageService: MessageService, 
              private confirmationService: ConfirmationService) {

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

  onDelete(member: Member, index: number) {

    this.confirmationService.confirm({

      message: "are you sure?",
      header: "Confirmation", 
      icon: "pi pi-exclamation-triangle",

      accept: () => {
        this.memberService.deleteMember(member.id)
        .subscribe(()=>{
          // remove this member from the members array
          this.members.splice(index, 1);
        })
      }, 
      reject: () => {}
    });
  }
}
