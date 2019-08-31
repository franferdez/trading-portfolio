import { TransactionNotFoundError } from '@/lib/errors/errors';
import { Prisma as PrismaClient } from '@/lib/prisma/prisma-client';
import { MutationResolvers, QueryResolvers, UserResolvers } from '@/types/generated-types';

// export const Mutation: MutationResolvers = {
//   createUser: async (_, args, { injector }, info) => {
//     const db = injector.get(PrismaClient);
//     const userInput = {
//       firstName: args.input.firstName,
//       lastName: args.input.lastName,
//     };
//     const user = await db.createUser(userInput);
//     return { ...user, fullName: '' };
//   },
// };

export const Query: QueryResolvers = {
  transaction: async (_, args, { injector }, info) => {
    const db = injector.get(PrismaClient);
    const transaction = await db.transaction({ id: args.id });
    if (!transaction) throw new TransactionNotFoundError();
    return transaction;
  },
  transactions: async (_, args, { injector }, info) => {
    const db = injector.get(PrismaClient);
    const transaction = await db.transactions();
    if (!transaction) throw new TransactionNotFoundError();
    return transaction;
  },
};

// export const User: UserResolvers = {
//   fullName: ({ firstName, lastName }) => `${firstName} ${lastName}`,
// };
