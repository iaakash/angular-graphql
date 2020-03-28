import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Long: any;
};



export type AggregateComment = {
   __typename?: 'AggregateComment';
  count: Scalars['Int'];
};

export type AggregatePost = {
   __typename?: 'AggregatePost';
  count: Scalars['Int'];
};

export type AggregateUser = {
   __typename?: 'AggregateUser';
  count: Scalars['Int'];
};

export type BatchPayload = {
   __typename?: 'BatchPayload';
  count: Scalars['Long'];
};

export type Comment = Node & {
   __typename?: 'Comment';
  id: Scalars['ID'];
  text: Scalars['String'];
  post: Post;
  author: User;
};

export type CommentConnection = {
   __typename?: 'CommentConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<CommentEdge>>;
  aggregate: AggregateComment;
};

export type CommentCreateInput = {
  id?: Maybe<Scalars['ID']>;
  text: Scalars['String'];
  post: PostCreateOneWithoutCommentsInput;
  author: UserCreateOneWithoutCommentsInput;
};

export type CommentCreateManyWithoutAuthorInput = {
  create?: Maybe<Array<CommentCreateWithoutAuthorInput>>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
};

export type CommentCreateManyWithoutPostInput = {
  create?: Maybe<Array<CommentCreateWithoutPostInput>>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
};

export type CommentCreateWithoutAuthorInput = {
  id?: Maybe<Scalars['ID']>;
  text: Scalars['String'];
  post: PostCreateOneWithoutCommentsInput;
};

export type CommentCreateWithoutPostInput = {
  id?: Maybe<Scalars['ID']>;
  text: Scalars['String'];
  author: UserCreateOneWithoutCommentsInput;
};

export type CommentEdge = {
   __typename?: 'CommentEdge';
  node: Comment;
  cursor: Scalars['String'];
};

export enum CommentOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC'
}

export type CommentPreviousValues = {
   __typename?: 'CommentPreviousValues';
  id: Scalars['ID'];
  text: Scalars['String'];
};

export type CommentScalarWhereInput = {
  AND?: Maybe<Array<CommentScalarWhereInput>>;
  OR?: Maybe<Array<CommentScalarWhereInput>>;
  NOT?: Maybe<Array<CommentScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_lt?: Maybe<Scalars['String']>;
  text_lte?: Maybe<Scalars['String']>;
  text_gt?: Maybe<Scalars['String']>;
  text_gte?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
};

export type CommentSubscriptionPayload = {
   __typename?: 'CommentSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Comment>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<CommentPreviousValues>;
};

export type CommentSubscriptionWhereInput = {
  AND?: Maybe<Array<CommentSubscriptionWhereInput>>;
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars['String']>;
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<CommentWhereInput>;
};

export type CommentUpdateInput = {
  text?: Maybe<Scalars['String']>;
  post?: Maybe<PostUpdateOneRequiredWithoutCommentsInput>;
  author?: Maybe<UserUpdateOneRequiredWithoutCommentsInput>;
};

export type CommentUpdateManyDataInput = {
  text?: Maybe<Scalars['String']>;
};

export type CommentUpdateManyMutationInput = {
  text?: Maybe<Scalars['String']>;
};

export type CommentUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<CommentCreateWithoutAuthorInput>>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type CommentUpdateManyWithoutPostInput = {
  create?: Maybe<Array<CommentCreateWithoutPostInput>>;
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutPostInput>>;
};

export type CommentUpdateManyWithWhereNestedInput = {
  where: CommentScalarWhereInput;
  data: CommentUpdateManyDataInput;
};

export type CommentUpdateWithoutAuthorDataInput = {
  text?: Maybe<Scalars['String']>;
  post?: Maybe<PostUpdateOneRequiredWithoutCommentsInput>;
};

export type CommentUpdateWithoutPostDataInput = {
  text?: Maybe<Scalars['String']>;
  author?: Maybe<UserUpdateOneRequiredWithoutCommentsInput>;
};

export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
  where: CommentWhereUniqueInput;
  data: CommentUpdateWithoutAuthorDataInput;
};

export type CommentUpdateWithWhereUniqueWithoutPostInput = {
  where: CommentWhereUniqueInput;
  data: CommentUpdateWithoutPostDataInput;
};

export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
  where: CommentWhereUniqueInput;
  update: CommentUpdateWithoutAuthorDataInput;
  create: CommentCreateWithoutAuthorInput;
};

export type CommentUpsertWithWhereUniqueWithoutPostInput = {
  where: CommentWhereUniqueInput;
  update: CommentUpdateWithoutPostDataInput;
  create: CommentCreateWithoutPostInput;
};

export type CommentWhereInput = {
  AND?: Maybe<Array<CommentWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  text_not?: Maybe<Scalars['String']>;
  text_in?: Maybe<Array<Scalars['String']>>;
  text_not_in?: Maybe<Array<Scalars['String']>>;
  text_lt?: Maybe<Scalars['String']>;
  text_lte?: Maybe<Scalars['String']>;
  text_gt?: Maybe<Scalars['String']>;
  text_gte?: Maybe<Scalars['String']>;
  text_contains?: Maybe<Scalars['String']>;
  text_not_contains?: Maybe<Scalars['String']>;
  text_starts_with?: Maybe<Scalars['String']>;
  text_not_starts_with?: Maybe<Scalars['String']>;
  text_ends_with?: Maybe<Scalars['String']>;
  text_not_ends_with?: Maybe<Scalars['String']>;
  post?: Maybe<PostWhereInput>;
  author?: Maybe<UserWhereInput>;
};

export type CommentWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};


export type Mutation = {
   __typename?: 'Mutation';
  createUser: User;
  createPost: Post;
  createComment: Comment;
  updateUser?: Maybe<User>;
  updatePost?: Maybe<Post>;
  updateComment?: Maybe<Comment>;
  deleteUser?: Maybe<User>;
  deletePost?: Maybe<Post>;
  deleteComment?: Maybe<Comment>;
  upsertUser: User;
  upsertPost: Post;
  upsertComment: Comment;
  updateManyUsers: BatchPayload;
  updateManyPosts: BatchPayload;
  updateManyComments: BatchPayload;
  deleteManyUsers: BatchPayload;
  deleteManyPosts: BatchPayload;
  deleteManyComments: BatchPayload;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationCreateCommentArgs = {
  data: CommentCreateInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdateCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationDeleteCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};


export type MutationUpsertPostArgs = {
  where: PostWhereUniqueInput;
  create: PostCreateInput;
  update: PostUpdateInput;
};


export type MutationUpsertCommentArgs = {
  where: CommentWhereUniqueInput;
  create: CommentCreateInput;
  update: CommentUpdateInput;
};


export type MutationUpdateManyUsersArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateManyPostsArgs = {
  data: PostUpdateManyMutationInput;
  where?: Maybe<PostWhereInput>;
};


export type MutationUpdateManyCommentsArgs = {
  data: CommentUpdateManyMutationInput;
  where?: Maybe<CommentWhereInput>;
};


export type MutationDeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationDeleteManyPostsArgs = {
  where?: Maybe<PostWhereInput>;
};


export type MutationDeleteManyCommentsArgs = {
  where?: Maybe<CommentWhereInput>;
};

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type Node = {
  id: Scalars['ID'];
};

export type PageInfo = {
   __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
};

export type Post = Node & {
   __typename?: 'Post';
  id: Scalars['ID'];
  title: Scalars['String'];
  body: Scalars['String'];
  author: User;
  comments?: Maybe<Array<Comment>>;
};


export type PostCommentsArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type PostConnection = {
   __typename?: 'PostConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<PostEdge>>;
  aggregate: AggregatePost;
};

export type PostCreateInput = {
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  body: Scalars['String'];
  author: UserCreateOneWithoutPostsInput;
  comments?: Maybe<CommentCreateManyWithoutPostInput>;
};

export type PostCreateManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
};

export type PostCreateOneWithoutCommentsInput = {
  create?: Maybe<PostCreateWithoutCommentsInput>;
  connect?: Maybe<PostWhereUniqueInput>;
};

export type PostCreateWithoutAuthorInput = {
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  body: Scalars['String'];
  comments?: Maybe<CommentCreateManyWithoutPostInput>;
};

export type PostCreateWithoutCommentsInput = {
  id?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  body: Scalars['String'];
  author: UserCreateOneWithoutPostsInput;
};

export type PostEdge = {
   __typename?: 'PostEdge';
  node: Post;
  cursor: Scalars['String'];
};

export enum PostOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  BodyAsc = 'body_ASC',
  BodyDesc = 'body_DESC'
}

export type PostPreviousValues = {
   __typename?: 'PostPreviousValues';
  id: Scalars['ID'];
  title: Scalars['String'];
  body: Scalars['String'];
};

export type PostScalarWhereInput = {
  AND?: Maybe<Array<PostScalarWhereInput>>;
  OR?: Maybe<Array<PostScalarWhereInput>>;
  NOT?: Maybe<Array<PostScalarWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Scalars['String']>>;
  title_not_in?: Maybe<Array<Scalars['String']>>;
  title_lt?: Maybe<Scalars['String']>;
  title_lte?: Maybe<Scalars['String']>;
  title_gt?: Maybe<Scalars['String']>;
  title_gte?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  body_not?: Maybe<Scalars['String']>;
  body_in?: Maybe<Array<Scalars['String']>>;
  body_not_in?: Maybe<Array<Scalars['String']>>;
  body_lt?: Maybe<Scalars['String']>;
  body_lte?: Maybe<Scalars['String']>;
  body_gt?: Maybe<Scalars['String']>;
  body_gte?: Maybe<Scalars['String']>;
  body_contains?: Maybe<Scalars['String']>;
  body_not_contains?: Maybe<Scalars['String']>;
  body_starts_with?: Maybe<Scalars['String']>;
  body_not_starts_with?: Maybe<Scalars['String']>;
  body_ends_with?: Maybe<Scalars['String']>;
  body_not_ends_with?: Maybe<Scalars['String']>;
};

export type PostSubscriptionPayload = {
   __typename?: 'PostSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<Post>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<PostPreviousValues>;
};

export type PostSubscriptionWhereInput = {
  AND?: Maybe<Array<PostSubscriptionWhereInput>>;
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars['String']>;
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<PostWhereInput>;
};

export type PostUpdateInput = {
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  author?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
};

export type PostUpdateManyDataInput = {
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type PostUpdateManyMutationInput = {
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};

export type PostUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type PostUpdateManyWithWhereNestedInput = {
  where: PostScalarWhereInput;
  data: PostUpdateManyDataInput;
};

export type PostUpdateOneRequiredWithoutCommentsInput = {
  create?: Maybe<PostCreateWithoutCommentsInput>;
  connect?: Maybe<PostWhereUniqueInput>;
  update?: Maybe<PostUpdateWithoutCommentsDataInput>;
  upsert?: Maybe<PostUpsertWithoutCommentsInput>;
};

export type PostUpdateWithoutAuthorDataInput = {
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  comments?: Maybe<CommentUpdateManyWithoutPostInput>;
};

export type PostUpdateWithoutCommentsDataInput = {
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  author?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutAuthorDataInput;
};

export type PostUpsertWithoutCommentsInput = {
  update: PostUpdateWithoutCommentsDataInput;
  create: PostCreateWithoutCommentsInput;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutAuthorDataInput;
  create: PostCreateWithoutAuthorInput;
};

export type PostWhereInput = {
  AND?: Maybe<Array<PostWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Scalars['String']>>;
  title_not_in?: Maybe<Array<Scalars['String']>>;
  title_lt?: Maybe<Scalars['String']>;
  title_lte?: Maybe<Scalars['String']>;
  title_gt?: Maybe<Scalars['String']>;
  title_gte?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  body_not?: Maybe<Scalars['String']>;
  body_in?: Maybe<Array<Scalars['String']>>;
  body_not_in?: Maybe<Array<Scalars['String']>>;
  body_lt?: Maybe<Scalars['String']>;
  body_lte?: Maybe<Scalars['String']>;
  body_gt?: Maybe<Scalars['String']>;
  body_gte?: Maybe<Scalars['String']>;
  body_contains?: Maybe<Scalars['String']>;
  body_not_contains?: Maybe<Scalars['String']>;
  body_starts_with?: Maybe<Scalars['String']>;
  body_not_starts_with?: Maybe<Scalars['String']>;
  body_ends_with?: Maybe<Scalars['String']>;
  body_not_ends_with?: Maybe<Scalars['String']>;
  author?: Maybe<UserWhereInput>;
  comments_some?: Maybe<CommentWhereInput>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Query = {
   __typename?: 'Query';
  users: Array<Maybe<User>>;
  posts: Array<Maybe<Post>>;
  comments: Array<Maybe<Comment>>;
  user?: Maybe<User>;
  post?: Maybe<Post>;
  comment?: Maybe<Comment>;
  usersConnection: UserConnection;
  postsConnection: PostConnection;
  commentsConnection: CommentConnection;
  node?: Maybe<Node>;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCommentsArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPostsConnectionArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryCommentsConnectionArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};

export type Subscription = {
   __typename?: 'Subscription';
  user?: Maybe<UserSubscriptionPayload>;
  post?: Maybe<PostSubscriptionPayload>;
  comment?: Maybe<CommentSubscriptionPayload>;
};


export type SubscriptionUserArgs = {
  where?: Maybe<UserSubscriptionWhereInput>;
};


export type SubscriptionPostArgs = {
  where?: Maybe<PostSubscriptionWhereInput>;
};


export type SubscriptionCommentArgs = {
  where?: Maybe<CommentSubscriptionWhereInput>;
};

export type User = Node & {
   __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  likes: Scalars['Int'];
  email: Scalars['String'];
  posts?: Maybe<Array<Post>>;
  comments?: Maybe<Array<Comment>>;
};


export type UserPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserCommentsArgs = {
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<CommentOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type UserConnection = {
   __typename?: 'UserConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<UserEdge>>;
  aggregate: AggregateUser;
};

export type UserCreateInput = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  likes: Scalars['Int'];
  email: Scalars['String'];
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
  comments?: Maybe<CommentCreateManyWithoutAuthorInput>;
};

export type UserCreateOneWithoutCommentsInput = {
  create?: Maybe<UserCreateWithoutCommentsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOneWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutCommentsInput = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  likes: Scalars['Int'];
  email: Scalars['String'];
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
};

export type UserCreateWithoutPostsInput = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  likes: Scalars['Int'];
  email: Scalars['String'];
  comments?: Maybe<CommentCreateManyWithoutAuthorInput>;
};

export type UserEdge = {
   __typename?: 'UserEdge';
  node: User;
  cursor: Scalars['String'];
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  LikesAsc = 'likes_ASC',
  LikesDesc = 'likes_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC'
}

export type UserPreviousValues = {
   __typename?: 'UserPreviousValues';
  id: Scalars['ID'];
  name: Scalars['String'];
  likes: Scalars['Int'];
  email: Scalars['String'];
};

export type UserSubscriptionPayload = {
   __typename?: 'UserSubscriptionPayload';
  mutation: MutationType;
  node?: Maybe<User>;
  updatedFields?: Maybe<Array<Scalars['String']>>;
  previousValues?: Maybe<UserPreviousValues>;
};

export type UserSubscriptionWhereInput = {
  AND?: Maybe<Array<UserSubscriptionWhereInput>>;
  mutation_in?: Maybe<Array<MutationType>>;
  updatedFields_contains?: Maybe<Scalars['String']>;
  updatedFields_contains_every?: Maybe<Array<Scalars['String']>>;
  updatedFields_contains_some?: Maybe<Array<Scalars['String']>>;
  node?: Maybe<UserWhereInput>;
};

export type UserUpdateInput = {
  name?: Maybe<Scalars['String']>;
  likes?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
};

export type UserUpdateManyMutationInput = {
  name?: Maybe<Scalars['String']>;
  likes?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
};

export type UserUpdateOneRequiredWithoutCommentsInput = {
  create?: Maybe<UserCreateWithoutCommentsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutCommentsDataInput>;
  upsert?: Maybe<UserUpsertWithoutCommentsInput>;
};

export type UserUpdateOneRequiredWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutPostsDataInput>;
  upsert?: Maybe<UserUpsertWithoutPostsInput>;
};

export type UserUpdateWithoutCommentsDataInput = {
  name?: Maybe<Scalars['String']>;
  likes?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserUpdateWithoutPostsDataInput = {
  name?: Maybe<Scalars['String']>;
  likes?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  comments?: Maybe<CommentUpdateManyWithoutAuthorInput>;
};

export type UserUpsertWithoutCommentsInput = {
  update: UserUpdateWithoutCommentsDataInput;
  create: UserCreateWithoutCommentsInput;
};

export type UserUpsertWithoutPostsInput = {
  update: UserUpdateWithoutPostsDataInput;
  create: UserCreateWithoutPostsInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  likes?: Maybe<Scalars['Int']>;
  likes_not?: Maybe<Scalars['Int']>;
  likes_in?: Maybe<Array<Scalars['Int']>>;
  likes_not_in?: Maybe<Array<Scalars['Int']>>;
  likes_lt?: Maybe<Scalars['Int']>;
  likes_lte?: Maybe<Scalars['Int']>;
  likes_gt?: Maybe<Scalars['Int']>;
  likes_gte?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Scalars['String']>>;
  email_not_in?: Maybe<Array<Scalars['String']>>;
  email_lt?: Maybe<Scalars['String']>;
  email_lte?: Maybe<Scalars['String']>;
  email_gt?: Maybe<Scalars['String']>;
  email_gte?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  posts_some?: Maybe<PostWhereInput>;
  comments_some?: Maybe<CommentWhereInput>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
};

export type UsersQueryVariables = {};


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'likes' | 'email'>
  )>> }
);

export type UpdateUserMutationVariables = {
  name: Scalars['String'];
  id: Scalars['ID'];
};


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
  )> }
);

export const UsersDocument = gql`
    query Users {
  users {
    id
    name
    likes
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UsersGQL extends Apollo.Query<UsersQuery, UsersQueryVariables> {
    document = UsersDocument;
    
  }
export const UpdateUserDocument = gql`
    mutation updateUser($name: String!, $id: ID!) {
  updateUser(data: {name: $name}, where: {id: $id}) {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateUserGQL extends Apollo.Mutation<UpdateUserMutation, UpdateUserMutationVariables> {
    document = UpdateUserDocument;
    
  }