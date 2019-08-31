import 'reflect-metadata';
// import 'graphql-import-node';

import { GraphQLModule } from '@graphql-modules/core';

//import { InfoModule } from '@modules/info';
import { UserModule } from './user/user.module';
import { TransactionModule } from '@modules/transaction';
//import { UserModule } from '@modules//user-test/';

export const MainModule = new GraphQLModule({
  imports: [TransactionModule, UserModule],
});
