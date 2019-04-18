import 'graphql-import-node';
import { GraphQLModule } from '@graphql-modules/core';

import { PrismaModule } from '../prisma';
import * as resolvers from './user.resolvers';
import * as typeDefs from './user.schema.graphql';

export const UserModule = new GraphQLModule({
    imports: [PrismaModule],
    resolvers: resolvers as any,
    typeDefs,
});
