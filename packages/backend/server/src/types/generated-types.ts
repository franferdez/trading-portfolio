type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type CreateUserInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type Mutation = {
  createUser: User;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
};

export type Query = {
  transaction: Transaction;
  transactions?: Maybe<Transaction>;
  user: User;
};

export type QueryTransactionArgs = {
  id: Scalars['String'];
};

export type QueryUserArgs = {
  id: Scalars['String'];
};

export type Transaction = {
  id: Scalars['ID'];
  date?: Maybe<Scalars['DateTime']>;
  product?: Maybe<Scalars['String']>;
  isin?: Maybe<Scalars['String']>;
  market?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['Float']>;
  localValue?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
  exchangeRate?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

export type User = Node & {
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  fullName: Scalars['String'];
};

import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: Query;
  String: Scalars['String'];
  Transaction: Transaction;
  ID: Scalars['ID'];
  DateTime: Scalars['DateTime'];
  Int: Scalars['Int'];
  Float: Scalars['Float'];
  User: User;
  Node: Node;
  Mutation: Mutation;
  CreateUserInput: CreateUserInput;
  Boolean: Scalars['Boolean'];
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<Context = any, ParentType = ResolversTypes['Mutation']> = {
  createUser?: Resolver<ResolversTypes['User'], ParentType, Context, MutationCreateUserArgs>;
};

export type NodeResolvers<Context = any, ParentType = ResolversTypes['Node']> = {
  __resolveType: TypeResolveFn<'User', ParentType, Context>;
  id?: Resolver<ResolversTypes['ID'], ParentType, Context>;
};

export type QueryResolvers<Context = any, ParentType = ResolversTypes['Query']> = {
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, Context, QueryTransactionArgs>;
  transactions?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, Context>;
  user?: Resolver<ResolversTypes['User'], ParentType, Context, QueryUserArgs>;
};

export type TransactionResolvers<Context = any, ParentType = ResolversTypes['Transaction']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, Context>;
  date?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, Context>;
  product?: Resolver<Maybe<ResolversTypes['String']>, ParentType, Context>;
  isin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, Context>;
  market?: Resolver<Maybe<ResolversTypes['String']>, ParentType, Context>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, Context>;
  rate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, Context>;
  localValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, Context>;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, Context>;
  exchangeRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, Context>;
  cost?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, Context>;
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, Context>;
};

export type UserResolvers<Context = any, ParentType = ResolversTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, Context>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, Context>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, Context>;
  fullName?: Resolver<ResolversTypes['String'], ParentType, Context>;
};

export type Resolvers<Context = any> = {
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<Context>;
  Node?: NodeResolvers;
  Query?: QueryResolvers<Context>;
  Transaction?: TransactionResolvers<Context>;
  User?: UserResolvers<Context>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<Context = any> = Resolvers<Context>;
