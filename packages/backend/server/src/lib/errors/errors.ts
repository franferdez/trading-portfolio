import { ApolloError } from 'apollo-server-core';

export class UserNotFoundError extends ApolloError {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  constructor() {
    super('User was not found.', 'USER_NOT_FOUND');
  }
}

export class TransactionNotFoundError extends ApolloError {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  constructor() {
    super('Transaction was not found.', 'TRANSACTION_NOT_FOUND');
  }
}
