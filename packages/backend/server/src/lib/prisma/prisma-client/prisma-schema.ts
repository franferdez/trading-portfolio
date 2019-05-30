// Code generated by Prisma (prisma@1.31.1). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateTransaction {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createTransaction(data: TransactionCreateInput!): Transaction!
  updateManyTransactions(data: TransactionUpdateManyMutationInput!, where: TransactionWhereInput): BatchPayload!
  deleteManyTransactions(where: TransactionWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  transactions(where: TransactionWhereInput, orderBy: TransactionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Transaction]!
  transactionsConnection(where: TransactionWhereInput, orderBy: TransactionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TransactionConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  transaction(where: TransactionSubscriptionWhereInput): TransactionSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Transaction {
  date: DateTime
  product: String
  isin: String
  market: String
  quantity: Int
  rate: Float
  localValue: Float
  value: Float
  exchangeRate: Float
  cost: Float
  total: Float
}

type TransactionConnection {
  pageInfo: PageInfo!
  edges: [TransactionEdge]!
  aggregate: AggregateTransaction!
}

input TransactionCreateInput {
  date: DateTime
  product: String
  isin: String
  market: String
  quantity: Int
  rate: Float
  localValue: Float
  value: Float
  exchangeRate: Float
  cost: Float
  total: Float
}

type TransactionEdge {
  node: Transaction!
  cursor: String!
}

enum TransactionOrderByInput {
  date_ASC
  date_DESC
  product_ASC
  product_DESC
  isin_ASC
  isin_DESC
  market_ASC
  market_DESC
  quantity_ASC
  quantity_DESC
  rate_ASC
  rate_DESC
  localValue_ASC
  localValue_DESC
  value_ASC
  value_DESC
  exchangeRate_ASC
  exchangeRate_DESC
  cost_ASC
  cost_DESC
  total_ASC
  total_DESC
}

type TransactionPreviousValues {
  date: DateTime
  product: String
  isin: String
  market: String
  quantity: Int
  rate: Float
  localValue: Float
  value: Float
  exchangeRate: Float
  cost: Float
  total: Float
}

type TransactionSubscriptionPayload {
  mutation: MutationType!
  node: Transaction
  updatedFields: [String!]
  previousValues: TransactionPreviousValues
}

input TransactionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TransactionWhereInput
  AND: [TransactionSubscriptionWhereInput!]
  OR: [TransactionSubscriptionWhereInput!]
  NOT: [TransactionSubscriptionWhereInput!]
}

input TransactionUpdateManyMutationInput {
  date: DateTime
  product: String
  isin: String
  market: String
  quantity: Int
  rate: Float
  localValue: Float
  value: Float
  exchangeRate: Float
  cost: Float
  total: Float
}

input TransactionWhereInput {
  date: DateTime
  date_not: DateTime
  date_in: [DateTime!]
  date_not_in: [DateTime!]
  date_lt: DateTime
  date_lte: DateTime
  date_gt: DateTime
  date_gte: DateTime
  product: String
  product_not: String
  product_in: [String!]
  product_not_in: [String!]
  product_lt: String
  product_lte: String
  product_gt: String
  product_gte: String
  product_contains: String
  product_not_contains: String
  product_starts_with: String
  product_not_starts_with: String
  product_ends_with: String
  product_not_ends_with: String
  isin: String
  isin_not: String
  isin_in: [String!]
  isin_not_in: [String!]
  isin_lt: String
  isin_lte: String
  isin_gt: String
  isin_gte: String
  isin_contains: String
  isin_not_contains: String
  isin_starts_with: String
  isin_not_starts_with: String
  isin_ends_with: String
  isin_not_ends_with: String
  market: String
  market_not: String
  market_in: [String!]
  market_not_in: [String!]
  market_lt: String
  market_lte: String
  market_gt: String
  market_gte: String
  market_contains: String
  market_not_contains: String
  market_starts_with: String
  market_not_starts_with: String
  market_ends_with: String
  market_not_ends_with: String
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  rate: Float
  rate_not: Float
  rate_in: [Float!]
  rate_not_in: [Float!]
  rate_lt: Float
  rate_lte: Float
  rate_gt: Float
  rate_gte: Float
  localValue: Float
  localValue_not: Float
  localValue_in: [Float!]
  localValue_not_in: [Float!]
  localValue_lt: Float
  localValue_lte: Float
  localValue_gt: Float
  localValue_gte: Float
  value: Float
  value_not: Float
  value_in: [Float!]
  value_not_in: [Float!]
  value_lt: Float
  value_lte: Float
  value_gt: Float
  value_gte: Float
  exchangeRate: Float
  exchangeRate_not: Float
  exchangeRate_in: [Float!]
  exchangeRate_not_in: [Float!]
  exchangeRate_lt: Float
  exchangeRate_lte: Float
  exchangeRate_gt: Float
  exchangeRate_gte: Float
  cost: Float
  cost_not: Float
  cost_in: [Float!]
  cost_not_in: [Float!]
  cost_lt: Float
  cost_lte: Float
  cost_gt: Float
  cost_gte: Float
  total: Float
  total_not: Float
  total_in: [Float!]
  total_not_in: [Float!]
  total_lt: Float
  total_lte: Float
  total_gt: Float
  total_gte: Float
  AND: [TransactionWhereInput!]
  OR: [TransactionWhereInput!]
  NOT: [TransactionWhereInput!]
}

type User {
  id: ID!
  firstName: String!
  lastName: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  firstName: String!
  lastName: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
}

type UserPreviousValues {
  id: ID!
  firstName: String!
  lastName: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  firstName: String
  lastName: String
}

input UserUpdateManyMutationInput {
  firstName: String
  lastName: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`