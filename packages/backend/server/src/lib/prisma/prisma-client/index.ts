// Code generated by Prisma (prisma@1.29.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  post: (where?: PostWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  post: (where: PostWhereUniqueInput) => PostPromise;
  posts: (
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Post>;
  postsConnection: (
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => PostConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createPost: (data: PostCreateInput) => PostPromise;
  updatePost: (
    args: { data: PostUpdateInput; where: PostWhereUniqueInput }
  ) => PostPromise;
  updateManyPosts: (
    args: { data: PostUpdateManyMutationInput; where?: PostWhereInput }
  ) => BatchPayloadPromise;
  upsertPost: (
    args: {
      where: PostWhereUniqueInput;
      create: PostCreateInput;
      update: PostUpdateInput;
    }
  ) => PostPromise;
  deletePost: (where: PostWhereUniqueInput) => PostPromise;
  deleteManyPosts: (where?: PostWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  post: (
    where?: PostSubscriptionWhereInput
  ) => PostSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type PostOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "content_ASC"
  | "content_DESC"
  | "summary_ASC"
  | "summary_DESC"
  | "slug_ASC"
  | "slug_DESC"
  | "views_ASC"
  | "views_DESC"
  | "published_ASC"
  | "published_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "password_ASC"
  | "password_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserUpdateOneRequiredWithoutPostsInput {
  create?: UserCreateWithoutPostsInput;
  update?: UserUpdateWithoutPostsDataInput;
  upsert?: UserUpsertWithoutPostsInput;
  connect?: UserWhereUniqueInput;
}

export type PostWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutAuthorDataInput;
}

export interface UserCreateInput {
  name: String;
  email?: String;
  password: String;
  posts?: PostCreateManyWithoutAuthorInput;
}

export interface PostUpdateManyMutationInput {
  title?: String;
  content?: String;
  summary?: String;
  slug?: String;
  views?: Int;
  published?: Boolean;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  posts_every?: PostWhereInput;
  posts_some?: PostWhereInput;
  posts_none?: PostWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface PostCreateInput {
  title: String;
  content: String;
  summary: String;
  slug?: String;
  views?: Int;
  published?: Boolean;
  author: UserCreateOneWithoutPostsInput;
}

export interface PostSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PostWhereInput;
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
}

export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput;
  connect?: UserWhereUniqueInput;
}

export interface PostUpdateManyDataInput {
  title?: String;
  content?: String;
  summary?: String;
  slug?: String;
  views?: Int;
  published?: Boolean;
}

export interface UserCreateWithoutPostsInput {
  name: String;
  email?: String;
  password: String;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  email?: String;
}>;

export interface PostUpdateInput {
  title?: String;
  content?: String;
  summary?: String;
  slug?: String;
  views?: Int;
  published?: Boolean;
  author?: UserUpdateOneRequiredWithoutPostsInput;
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutAuthorDataInput;
  create: PostCreateWithoutAuthorInput;
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput;
  delete?: PostWhereUniqueInput[] | PostWhereUniqueInput;
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput;
  set?: PostWhereUniqueInput[] | PostWhereUniqueInput;
  disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput;
  update?:
    | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    | PostUpdateWithWhereUniqueWithoutAuthorInput;
  upsert?:
    | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    | PostUpsertWithWhereUniqueWithoutAuthorInput;
  deleteMany?: PostScalarWhereInput[] | PostScalarWhereInput;
  updateMany?:
    | PostUpdateManyWithWhereNestedInput[]
    | PostUpdateManyWithWhereNestedInput;
}

export interface PostWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  content?: String;
  content_not?: String;
  content_in?: String[] | String;
  content_not_in?: String[] | String;
  content_lt?: String;
  content_lte?: String;
  content_gt?: String;
  content_gte?: String;
  content_contains?: String;
  content_not_contains?: String;
  content_starts_with?: String;
  content_not_starts_with?: String;
  content_ends_with?: String;
  content_not_ends_with?: String;
  summary?: String;
  summary_not?: String;
  summary_in?: String[] | String;
  summary_not_in?: String[] | String;
  summary_lt?: String;
  summary_lte?: String;
  summary_gt?: String;
  summary_gte?: String;
  summary_contains?: String;
  summary_not_contains?: String;
  summary_starts_with?: String;
  summary_not_starts_with?: String;
  summary_ends_with?: String;
  summary_not_ends_with?: String;
  slug?: String;
  slug_not?: String;
  slug_in?: String[] | String;
  slug_not_in?: String[] | String;
  slug_lt?: String;
  slug_lte?: String;
  slug_gt?: String;
  slug_gte?: String;
  slug_contains?: String;
  slug_not_contains?: String;
  slug_starts_with?: String;
  slug_not_starts_with?: String;
  slug_ends_with?: String;
  slug_not_ends_with?: String;
  views?: Int;
  views_not?: Int;
  views_in?: Int[] | Int;
  views_not_in?: Int[] | Int;
  views_lt?: Int;
  views_lte?: Int;
  views_gt?: Int;
  views_gte?: Int;
  published?: Boolean;
  published_not?: Boolean;
  author?: UserWhereInput;
  AND?: PostWhereInput[] | PostWhereInput;
  OR?: PostWhereInput[] | PostWhereInput;
  NOT?: PostWhereInput[] | PostWhereInput;
}

export interface UserUpdateWithoutPostsDataInput {
  name?: String;
  email?: String;
  password?: String;
}

export interface UserUpdateManyMutationInput {
  name?: String;
  email?: String;
  password?: String;
}

export interface PostCreateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput;
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput;
}

export interface PostCreateWithoutAuthorInput {
  title: String;
  content: String;
  summary: String;
  slug?: String;
  views?: Int;
  published?: Boolean;
}

export interface UserUpdateInput {
  name?: String;
  email?: String;
  password?: String;
  posts?: PostUpdateManyWithoutAuthorInput;
}

export interface UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput;
  create: UserCreateWithoutPostsInput;
}

export interface PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput;
  data: PostUpdateManyDataInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface PostUpdateWithoutAuthorDataInput {
  title?: String;
  content?: String;
  summary?: String;
  slug?: String;
  views?: Int;
  published?: Boolean;
}

export interface PostScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  content?: String;
  content_not?: String;
  content_in?: String[] | String;
  content_not_in?: String[] | String;
  content_lt?: String;
  content_lte?: String;
  content_gt?: String;
  content_gte?: String;
  content_contains?: String;
  content_not_contains?: String;
  content_starts_with?: String;
  content_not_starts_with?: String;
  content_ends_with?: String;
  content_not_ends_with?: String;
  summary?: String;
  summary_not?: String;
  summary_in?: String[] | String;
  summary_not_in?: String[] | String;
  summary_lt?: String;
  summary_lte?: String;
  summary_gt?: String;
  summary_gte?: String;
  summary_contains?: String;
  summary_not_contains?: String;
  summary_starts_with?: String;
  summary_not_starts_with?: String;
  summary_ends_with?: String;
  summary_not_ends_with?: String;
  slug?: String;
  slug_not?: String;
  slug_in?: String[] | String;
  slug_not_in?: String[] | String;
  slug_lt?: String;
  slug_lte?: String;
  slug_gt?: String;
  slug_gte?: String;
  slug_contains?: String;
  slug_not_contains?: String;
  slug_starts_with?: String;
  slug_not_starts_with?: String;
  slug_ends_with?: String;
  slug_not_ends_with?: String;
  views?: Int;
  views_not?: Int;
  views_in?: Int[] | Int;
  views_not_in?: Int[] | Int;
  views_lt?: Int;
  views_lte?: Int;
  views_gt?: Int;
  views_gte?: Int;
  published?: Boolean;
  published_not?: Boolean;
  AND?: PostScalarWhereInput[] | PostScalarWhereInput;
  OR?: PostScalarWhereInput[] | PostScalarWhereInput;
  NOT?: PostScalarWhereInput[] | PostScalarWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email?: String;
  password: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
}

export interface PostPreviousValues {
  id: ID_Output;
  title: String;
  content: String;
  summary: String;
  slug?: String;
  views?: Int;
  published: Boolean;
}

export interface PostPreviousValuesPromise
  extends Promise<PostPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  content: () => Promise<String>;
  summary: () => Promise<String>;
  slug: () => Promise<String>;
  views: () => Promise<Int>;
  published: () => Promise<Boolean>;
}

export interface PostPreviousValuesSubscription
  extends Promise<AsyncIterator<PostPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  content: () => Promise<AsyncIterator<String>>;
  summary: () => Promise<AsyncIterator<String>>;
  slug: () => Promise<AsyncIterator<String>>;
  views: () => Promise<AsyncIterator<Int>>;
  published: () => Promise<AsyncIterator<Boolean>>;
}

export interface PostSubscriptionPayload {
  mutation: MutationType;
  node: Post;
  updatedFields: String[];
  previousValues: PostPreviousValues;
}

export interface PostSubscriptionPayloadPromise
  extends Promise<PostSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PostPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PostPreviousValuesPromise>() => T;
}

export interface PostSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PostSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PostSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PostPreviousValuesSubscription>() => T;
}

export interface AggregatePost {
  count: Int;
}

export interface AggregatePostPromise
  extends Promise<AggregatePost>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePostSubscription
  extends Promise<AsyncIterator<AggregatePost>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PostEdge {
  node: Post;
  cursor: String;
}

export interface PostEdgePromise extends Promise<PostEdge>, Fragmentable {
  node: <T = PostPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PostEdgeSubscription
  extends Promise<AsyncIterator<PostEdge>>,
    Fragmentable {
  node: <T = PostSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface Post {
  id: ID_Output;
  title: String;
  content: String;
  summary: String;
  slug?: String;
  views?: Int;
  published: Boolean;
}

export interface PostPromise extends Promise<Post>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  content: () => Promise<String>;
  summary: () => Promise<String>;
  slug: () => Promise<String>;
  views: () => Promise<Int>;
  published: () => Promise<Boolean>;
  author: <T = UserPromise>() => T;
}

export interface PostSubscription
  extends Promise<AsyncIterator<Post>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  content: () => Promise<AsyncIterator<String>>;
  summary: () => Promise<AsyncIterator<String>>;
  slug: () => Promise<AsyncIterator<String>>;
  views: () => Promise<AsyncIterator<Int>>;
  published: () => Promise<AsyncIterator<Boolean>>;
  author: <T = UserSubscription>() => T;
}

export interface PostConnection {
  pageInfo: PageInfo;
  edges: PostEdge[];
}

export interface PostConnectionPromise
  extends Promise<PostConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PostEdge>>() => T;
  aggregate: <T = AggregatePostPromise>() => T;
}

export interface PostConnectionSubscription
  extends Promise<AsyncIterator<PostConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PostEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePostSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface User {
  id: ID_Output;
  name: String;
  email?: String;
  password: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  password: () => Promise<String>;
  posts: <T = FragmentableArray<Post>>(
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  posts: <T = Promise<AsyncIterator<PostSubscription>>>(
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4467/Postgres/dev`
});
export const prisma = new Prisma();