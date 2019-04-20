import { GraphQLModule } from '@graphql-modules/core';
import { importSchema } from 'graphql-import';
import * as path from 'path';

import * as resolvers from './user.resolvers';
import { PrismaModule } from '../prisma';

const typeDefs = importSchema(path.join(__dirname, './user.schema.graphql'));

export const UserModule = new GraphQLModule({
  imports: [PrismaModule],
  typeDefs,
  resolvers,
});
