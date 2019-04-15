import "graphql-import-node";
import { GraphQLModule } from "@graphql-modules/core";

import * as typeDefs from "./schema.graphql";
import * as resolvers from "./resolvers";
import { PrismaModule } from "../prisma";

export const UserModule = new GraphQLModule({
  imports: [PrismaModule],
  typeDefs,
  resolvers
});
