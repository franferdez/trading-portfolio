import { UserNotFoundError } from '@/lib/errors';
import { Prisma as PrismaClient } from '@/lib/prisma/prisma-client';
import { MutationResolvers, QueryResolvers, UserResolvers } from "@/types/generated-types";

export const Mutation: MutationResolvers = {
  createUser: async (_, args, { injector }, info) => {
    const db = injector.get(PrismaClient);
    const userInput = {
      firstName: args.input.firstName,
      lastName: args.input.lastName,
    };
    const user = await db.createUser(userInput);
    return { ...user, fullName: '' };
  },
};

export const Query: QueryResolvers = {
  user: async (_, args, { injector }, info) => {
    const db = injector.get(PrismaClient);
    const user = await db.user({ id: args.id });
    if (!user) throw new UserNotFoundError();
    return { ...user, fullName: '' };
  },
};

export const User: UserResolvers = {
  fullName: ({ firstName, lastName }) => `${firstName} ${lastName}`,
};
