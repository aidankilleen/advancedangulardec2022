import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'member-list-page',
  template: `
    <div *ngFor="let member of members$ | async">
      {{ member | json }}
    </div>
  `,
  styleUrls: ['./member-list-page.component.css']
})
export class MemberListPageComponent implements OnInit {

  members$!: Observable<Member[]>;

  //members: Member[] =[];
  constructor(public memberService: MemberService) {
  }

  ngOnInit() {
    this.members$ = this.memberService.getMembers();
  }
}
