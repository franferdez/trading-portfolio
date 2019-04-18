import "graphql-import-node";
import { GraphQLModule } from "@graphql-modules/core";
import { importSchema } from "graphql-import";

import * as typeDefs from "./schema.graphql";
import resolvers from "./resolvers";
import * as path from "path";

export const InfoModule = new GraphQLModule({
  typeDefs,
  resolvers
});
