import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AllUsersGQL, User} from './user.service';

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

  constructor(private allUsersGQL: AllUsersGQL) {}

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
    console.log('payload::', payload);
    this.updateUserName(payload);
  }

  updateUserName({id, name}) {
    const updateUser = gql`
       mutation updateUser($name: String!, $id: ID!) {
        updateUser(
          data: { name: $name }
          where: { id: $id }
        ) {
          id
          name
        }
      }
    `;

//     const submitRepository = gql`
//   mutation submitRepository {
//     submitRepository(repoFullName: "apollographql/apollo-client") {
//       createdAt
//     }
//   }
// `;

    this.apollo.mutate({
      mutation: updateUser,
      variables: {
        id,
        name,
      }
    }).subscribe();
  }
}
