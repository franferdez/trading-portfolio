import "graphql-import-node";
import { GraphQLModule } from "@graphql-modules/core";

import { InfoModule } from "@modules/info";
// import { UserModule } from "./user/user.module";
import { UserModule } from "./user-test/";

export const MainModule = new GraphQLModule({
  imports: [InfoModule, UserModule]
});
