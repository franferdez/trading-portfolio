import { ApolloServer } from 'apollo-server';
import { createTestClient } from 'apollo-server-testing';
import { MainModule } from '@modules/main.module';

const { schema, context } = MainModule;

const server = new ApolloServer({
  schema,
  context,
  introspection: true,
});

const { mutate, query } = createTestClient(server);

export { mutate, query };
