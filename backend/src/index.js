// @flow
require("dotenv").config();
import "@babel/polyfill";
import express from "express";
import { ApolloServer } from "apollo-server-express";
// import { Prisma } from "prisma-binding";

import { prisma } from "./generated/prisma-client/index.js";
import { schema } from "./schema";
import { startupMessages, RESPONSE } from "./constants";
import { SERVER } from "./config";
import enableCors from "./cors";
import { handleAuthentication } from "./authentication";
import {
  formatResponse /* formatError, formatParams */
} from "./graphql/format-response";
const app = express();

app.get("/", (req, res) => {
  res.writeHead(200, { Connection: "close" });
  res.end(RESPONSE.MESSAGES.UP_RUNNING);
  //res.end("OK");
});

app.use(handleAuthentication);

// In case you want to use schema delegation
// new Prisma({
//       typeDefs: "src/generated/prisma.graphql",
//       endpoint: process.env.PRISMA_URL
//     })

const server = new ApolloServer({
  schema,
  path: SERVER.GRAPHQL,
  cors: enableCors(),
  context: req => ({
    ...req,
    prisma
  }),
  //formatError: err => formatError(err),
  //formatParams: params => formatParams(params),
  formatResponse: (response, query) => formatResponse({ response, query })
});

server.applyMiddleware({ app });

const PORT = process.env.PORT;
app.listen({ port: PORT }, () => {
  startupMessages({ port: PORT });
  // console.log(`🚀  Server ready`);
});

// server.listen({ port: process.env.PORT }).then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });
