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

const info = () => `This is the API of a Hackernews Clone`;

export default {
  posts,
  user,
  info
};
