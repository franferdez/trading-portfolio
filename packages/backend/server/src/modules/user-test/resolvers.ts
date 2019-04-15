import { UserNotFoundError } from "@/lib/errors";
import {
  MutationResolvers,
  QueryResolvers,
  UserResolvers
} from "@/types/generated-types";
import { Prisma as PrismaClient } from "@/lib/prisma/prisma-client";

// export default {
//   Mutation: {
//     createUser: async (_, args, { injector }, info) => {
//       const db = injector.get(PrismaClient);
//       const userInput = {
//         name: args.input.name,
//         email: args.input.email,
//         password: args.input.password
//       };

//       const user = await db.createUser(userInput);
//       return { ...user };
//     }
//   },
//   Query: {
//     user: async (_, args, { injector }, info) => {
//       const db = injector.get(/* <PrismaClient> */ PrismaClient);
//       const user = await db.user({ id: args.id });
//       if (!user) throw new UserNotFoundError();
//       return { ...user };
//     }
//   },
//   User: {
//     id: user => user.id,
//     name: user => user.name,
//     email: user => user.email,
//     password: user => user.password
//   }
// };

export const Mutation /* : MutationResolvers.Resolvers  */ = {
  createUser: async (_, args, { injector }, info) => {
    const db = injector.get(PrismaClient);
    const userInput = {
      name: args.input.name,
      email: args.input.email,
      password: args.input.password
    };
    const user = await db.createUser(userInput);
    return { ...user };
  }
};

export const Query: QueryResolvers = {
  user: async (_, args, { injector }, info) => {
    const db = injector.get(/* <PrismaClient> */ PrismaClient);
    const user = await db.user({ id: args.id });
    if (!user) throw new UserNotFoundError();
    return { ...user };
  }
};

export const User /* : UserResolvers.Resolvers */ = {
  id: user => user.id,
  name: user => user.name,
  email: user => user.email,
  password: user => user.password
};
