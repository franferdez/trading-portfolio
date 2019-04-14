import { UserNotFoundError } from "@/lib/errors";
import { MutationResolvers, QueryResolvers, UserResolvers } from "@/types";
import { Prisma as PrismaClient } from "@/lib/prisma/prisma-client";

export default {
  Query: {
    // user: (root, { id }, ctx) => {
    //   return {
    //     _id: id,
    //     username: "jhon"
    //   };
    // },
    user: async (_, args, { injector }, info) => {
      const db = injector.get(/* <PrismaClient> */ PrismaClient);
      const user = await db.user({ id: args.id });
      if (!user) throw new UserNotFoundError();
      return { ...user };
    }
  },
  User: {
    id: user => user._id,
    username: user => user.username
  }
};
