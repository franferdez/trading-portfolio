import { GraphQLModule } from '@graphql-modules/core';
import { importSchema } from 'graphql-import';
import * as path from 'path';

import * as resolvers from './transaction.resolvers';
import { PrismaModule } from '../prisma';

const typeDefs = importSchema(path.join(__dirname, './transaction.schema.graphql'));

export const TransactionModule = new GraphQLModule({
  imports: [PrismaModule],
  typeDefs,
  resolvers,
});
