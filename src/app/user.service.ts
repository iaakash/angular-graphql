import { Injectable } from "@angular/core";
import { Query } from "apollo-angular";
import gql from "graphql-tag";

export interface User {
  id: string;
  name: string;
  likes: number;
}

export interface Response {
  users: User[];
}

@Injectable({
  providedIn: "root"
})
export class AllUsersGQL extends Query<Response> {
  document = gql`
    query allUsers {
      users {
        id
        name
        likes
      }
    }
  `;
}
