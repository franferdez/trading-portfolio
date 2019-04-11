// @flow
require("dotenv").config();
import "@babel/polyfill";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { importSchema } from "graphql-import";
// import { Prisma } from "prisma-binding";
import path from "path";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import { prisma } from "./generated/prisma-client/index.js";
import authMiddleware from "./auth/auth-middleware";

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
  context: req => {
    return {
      ...req,
      prisma
    };
  }
});

const app = express();
server.applyMiddleware({ app });

app.use("/graphql", authMiddleware);

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
