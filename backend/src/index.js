// @flow
require("dotenv").config();
import "@babel/polyfill";
import { ApolloServer } from "apollo-server";
import { importSchema } from "graphql-import";
// import { Prisma } from "prisma-binding";
import path from "path";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import { prisma } from "./generated/prisma-client/index.js";

const resolvers = {
  Query,
  Mutation
};
// In case you want to use schema delegation
// new Prisma({
//       typeDefs: "src/generated/prisma.graphql",
//       endpoint: process.env.PRISMA_URL
//     })

const typeDefs = importSchema(path.resolve("src/schema.graphql"));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    prisma
  })
});

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
