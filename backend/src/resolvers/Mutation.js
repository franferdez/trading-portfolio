const createDraft = (_, args, context, info) => {
  return context.prisma.mutation.createPost(
    {
      data: {
        title: args.title,
        content: args.content,
        slug: args.slug,
        author: {
          connect: {
            id: args.authorId
          }
        }
      }
    },
    info
  );
};

const publish = (_, args, context, info) => {
  return context.prisma.mutation.updatePost(
    {
      where: {
        id: args.id
      },
      data: {
        published: true
      }
    },
    info
  );
};

const deletePost = (_, args, context, info) => {
  return context.prisma.mutation.deletePost(
    {
      where: {
        id: args.id
      }
    },
    info
  );
};

const signup = (_, args, context, info) => {
  return context.prisma.mutation.createUser(
    {
      data: {
        name: args.name
      }
    },
    info
  );
};

export default {
  createDraft,
  publish,
  deletePost,
  signup
};
