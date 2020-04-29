import { UserGQL, User } from './../../generated/graphql';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userId: number;
  user$: Observable<User>;

  constructor(private route: ActivatedRoute, private userGQL: UserGQL,) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((data:any) => {
      this.userId = data.params.id;
      console.log('userId::', this.userId);
      this.fetchUserDetails();
    })
  }

  fetchUserDetails() {
    // this.user$ = this.userGQL
    // .watch({
    //   id: `${this.userId}`
    // })
    // .valueChanges.pipe(
    //   map(res => res.data.user)
    // )
  }

}
