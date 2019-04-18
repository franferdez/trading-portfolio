export default {
  Query: {
    info: (_, args, ctx, info) => {
      console.log("ctx", ctx);
      return "This a test module";
      //return prisma.users({}, info);
    }
  }
};
