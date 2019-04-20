export default {
  Query: {
    info: (_, args, ctx, info) => {
      return 'This a test module';
      //return prisma.users({}, info);
    },
  },
};
