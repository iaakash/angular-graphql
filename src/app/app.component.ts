// import { UsersGQL } from './../generated/graphql';
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AllUsersGQL} from './user.service';

import {User, UsersGQL, UpdateUserGQL} from '../generated/graphql';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  usersQuery = gql`
    {
      users {
        id
        name
        likes
      }
    }
  `;
  users$: Observable<User[]>;

  constructor(private allUsersGQL: UsersGQL, private updateUserGQL: UpdateUserGQL) {}

  ngOnInit() {
    // this.users$ = this.apollo
    //   .watchQuery<any>({
    //     query: this.usersQuery
    //   })
    //   .valueChanges.pipe(map((res: any) => res.data.users));

    this.users$ = this.allUsersGQL.watch()
      .valueChanges
      .pipe(
        map(result => result.data.users)
      );
  }

  onUserUpdate(payload) {
    this.updateUserName(payload);
  }

  updateUserName({id, name}) {
    this.updateUserGQL.mutate({
      id,
      name,
    }).subscribe();

  }
}
