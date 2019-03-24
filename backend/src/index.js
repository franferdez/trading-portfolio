// @flow
require("dotenv").config();
import { ApolloServer } from "apollo-server";
import { importSchema } from "graphql-import";
import { Prisma } from "prisma-binding";
import path from "path";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";

const resolvers = {
  Query,
  Mutation
};

const typeDefs = importSchema(path.resolve("src/schema.graphql"));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    prisma: new Prisma({
      typeDefs: "src/generated/prisma.graphql",
      endpoint: process.env.PRISMA_URL
    })
  })
});

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
