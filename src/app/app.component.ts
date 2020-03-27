import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

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
  users$: Observable<any>;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.users$ = this.apollo
      .watchQuery<any>({
        query: this.usersQuery
      })
      .valueChanges.pipe(map((res: any) => res.data.users));
  }

  likePostForUser() {
    const updateUser = gql`
       mutation updateUser {
        updateUser(
          data: { name: "Sheldon Cooper" }
          where: { id: "5e7dfe8c24aa9a00089ba0b6" }
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
      mutation: updateUser
    }).subscribe();
  }
}
