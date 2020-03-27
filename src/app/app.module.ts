import { UsersListComponent } from './users-list/users-list.component';
import { GraphQLModule } from './graphql.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    AppRoutingModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: "http://localhost:4466/"
        })
      }
    },
    deps: [HttpLink],
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
