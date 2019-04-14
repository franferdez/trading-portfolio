import "graphql-import-node";
import { GraphQLModule } from "@graphql-modules/core";

import * as typeDefs from "./schema.graphql";
import * as resolvers from "./resolvers";

console.log("typeDefs", typeDefs);

export const UserModule = new GraphQLModule({
  typeDefs,
  resolvers
});
