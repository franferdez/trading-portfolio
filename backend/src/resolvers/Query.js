const posts = (_, args, context, info) => {
  return context.prisma.query.posts(
    {
      where: {
        OR: [
          { title_contains: args.searchString },
          { content_contains: args.searchString }
        ]
      }
    },
    info
  );
};

const user = (_, args, context, info) => {
  return context.prisma.query.user(
    {
      where: {
        id: args.id
      }
    },
    info
  );
};

const otherQueries = {
  test: () => "Server is up and running... working smoothly",
  connection: () => "Connected",
  _checkAuth: (_, args, context) =>
    `Authorized | CurentUserId ${/* context.user.id */ "no-id"}!`,
  testPermissionsHasRole: () => "ok role",
  testPermissionsIsAllowed: () => "ok permission"
};

export default {
  posts,
  user,
  ...otherQueries
};
