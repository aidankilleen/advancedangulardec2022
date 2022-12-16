import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from './member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  url = "http://localhost:8000/members";

  members: Member[] = [{
      "id": 1,
      "name": "Alice",
      "email": "alice@gmail.com",
      "active": false
    },
    {
      "id": 2,
      "name": "Bob",
      "email": "bob@gmail.com",
      "active": true
    },
    {
      "id": 3,
      "name": "Carol",
      "email": "carol@gmail.com",
      "active": false
    },
    {
      "id": 4,
      "name": "Dan",
      "email": "dan@gmail.com",
      "active": true
    },
    {
      "id": 5,
      "name": "Eve",
      "email": "eve@gmail.com",
      "active": false
    },
    {
      "name": "New Member",
      "email": "new.member@gmail.com",
      "active": true,
      "id": 6
    }

  ];
  constructor(public httpClient: HttpClient) { 
  }

  getMembers(): Observable<Member[]> {

    let token = localStorage.getItem("ang_auth");

    console.log("TOKEN:");
    console.log(token);    
    return this.httpClient.get<Member[]>(this.url, {
      headers: {
        authorization: `Bearer ${token}`
      }
    });
  }

  getMember(id: number): Observable<Member> {

    return this.httpClient.get<Member>(`${this.url}/${id}`);
  }

  deleteMember(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

  addMember(memberToAdd: Member): Observable<Member> {

    // remove the id field so that the web service will assign one.
    let { id, ...memberWithoutId } = memberToAdd;

    return this.httpClient.post<Member>(this.url, 
                                        memberWithoutId, 
                                        {
                                          headers:{
                                            'Content-Type': 'application/json'
                                          }
                                        });
  }
  updateMember(userToUpdate: Member): Observable<Member> {



    return this.httpClient.put<Member>(`${this.url}/${userToUpdate.id}`, 
                                       userToUpdate, 
                                       {
                                        headers:{
                                          'Content-Type': 'application/json'
                                        }
                                      });
  }
}
