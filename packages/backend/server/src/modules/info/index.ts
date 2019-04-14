import "graphql-import-node";
import { GraphQLModule } from "@graphql-modules/core";
import { importSchema } from "graphql-import";

import * as typeDefs from "./schema.graphql";
import resolvers from "./resolvers";
import * as path from "path";

console.log("resolvers", resolvers);

//const typeDefs = importSchema(path.resolve(__dirname, "schema.graphql"));

export const InfoModule = new GraphQLModule({
  typeDefs,
  resolvers
});
