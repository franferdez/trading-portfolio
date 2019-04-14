import "graphql-import-node";
import { GraphQLModule } from "@graphql-modules/core";

// import { UserModule } from "../user";
// import { InfoModule } from "@modules/info";
import { InfoModule } from "../info";
import { UserModule } from "../user/user.module";

console.log("UserModule", UserModule);
console.log("InfoModule", InfoModule);

export const MainModule = new GraphQLModule({
  // typeDefs,
  // resolvers,
  imports: [InfoModule, UserModule]
});
