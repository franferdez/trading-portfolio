import { makeExecutableSchema } from "graphql-tools";
// import { mergeTypes, mergeResolvers } from "merge-graphql-schemas";
// import OKGGraphQLScalars from '@okgrow/graphql-scalars'; // eslint-disable-line
import { mapValues } from "lodash";
import { importSchema } from "graphql-import";
import path from "path";

// import components from "~/components";
import { UNAUTHORIZED } from "./constants";
import { isPrivateOperation } from "./utils";
import { directives, attachDirectives } from "./directives/";

import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";

// Add more okgrow/graphql-scalars if you need
// const oKGGraphQLScalars = `
//   scalar DateTime
//   scalar NonNegativeFloat
//   scalar EmailAddress
// `;

// const typeDefs = mergeTypes([
//   directives,
//   // oKGGraphQLScalars,
//   ...components.types
// ]);

/************* MY ORIGINAL SCHEMA ************** */

const typeDefs = importSchema(path.resolve("src/schema.graphql"));

const resolvers = {
  Query,
  Mutation
};

/************* PROTECTING YOUR QUERIES/MUTATIONS ************** */

const authenticated = resolver => (parent, args, context, info) => {
  // console.log('context user', context.user);
  if (context.user) {
    return resolver(parent, args, context, info);
  }
  throw new Error(UNAUTHORIZED); // this is gonna be handled in _format-errors
};

// const resolvers = [...components.resolvers];

/*
 * ANYTHING CONTAINING THE PRIVATE_PREFIX STRING IN THE RESOLVER NAME
 * DOESN'T GO THROUGH THE AUTHORIZATION CHECK */
// Credit: zach.codes https://zach.codes/handling-auth-in-graphql-the-right-way/

// const authResolvers = mapValues(mergeResolvers(resolvers), (resolver, type) =>
//   mapValues(resolver, item => {
//     if (type !== "Mutation" && type !== "Query") return item; // skip type resolvers
//     const { name = "" } = item;
//     const isPrivate = isPrivateOperation(name);
//     if (isPrivate) return authenticated(item);
//     if (process.env.NODE_ENV === "testing") {
//       // skip auth for graphql-tester
//       return item;
//     }
//     return item;
//   })
// );

/** *************************************************/

export const schema = makeExecutableSchema({
  typeDefs,
  //resolvers: authResolvers
  resolvers
});

// The following code is needed since schemas built with makeExecutableSchema (or other client tools)
// do not have handler functions for serialize, parseValue, and parseLiteral bound.
// ref: https://stackoverflow.com/a/47827818

// Object.keys(OKGGraphQLScalars).forEach(key => {
//   // eslint-disable-next-line no-underscore-dangle
//   if (schema._typeMap[key]) {
//     Object.assign(schema._typeMap[key], OKGGraphQLScalars[key]); // eslint-disable-line no-underscore-dangle
//   }
// });

// attachDirectives(schema);
