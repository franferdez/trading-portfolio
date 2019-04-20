require('dotenv').config();
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { importSchema } from 'graphql-import';
// import { Prisma } from "prisma-binding";

import { prisma } from './lib/prisma/prisma-client/';
import * as path from 'path';

import { MainModule } from "@modules/main.module";

const { schema, context, resolvers } = MainModule;

// In case you want to use schema delegation
// new Prisma({
//       typeDefs: "src/generated/prisma.graphql",
//       endpoint: process.env.PRISMA_URL
//     })

// const typeDefs = importSchema(path.resolve("src/user.schema.graphql"));

// interface Ctx {
//   req: Request;
//   res: Response;
// }

const server = new ApolloServer({
  schema,
  introspection: true,
  context: ctx => context({ ...ctx, prisma }),
  // context: req => ({
  //   ...context,
  //   ...req,
  //   prisma
  // })
});

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
