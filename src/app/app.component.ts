// import { UsersGQL } from './../generated/graphql';
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import {
  User,
  UsersGQL,
  UpdateUserGQL,
  CreateUserGQL,
  DeleteUserGQL,
} from "../generated/graphql";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
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
  createUserForm: FormGroup;

  constructor(
    private allUsersGQL: UsersGQL,
    private updateUserGQL: UpdateUserGQL,
    private createUserGQL: CreateUserGQL,
    private deleteUserGQL: DeleteUserGQL,
    private fb: FormBuilder
  ) {}

  initForm() {
    this.createUserForm = this.fb.group({
      name: [""],
      email: [""]
    });
  }
  ngOnInit() {
    this.initForm();
    this.users$ = this.allUsersGQL
      .watch()
      .valueChanges.pipe(map(result => result.data.users));
  }

  onUserUpdate(payload) {
    const { mode } = payload;
    if (mode === 'update') {
      this.updateUserName(payload);
    } else {
      this.deleteUser(payload);
    }
  }

  deleteUser(payload) {
    this.deleteUserGQL.mutate({
      id: payload.id
    }).subscribe();
  }
  updateUserName({ id, name }) {
    this.updateUserGQL
      .mutate({
        id,
        name
      })
      .subscribe();
  }

  createUser() {
    const { name, email } = this.createUserForm.value;
    this.createUserGQL
      .mutate({
        name,
        email
      })
      .subscribe();
  }
}
