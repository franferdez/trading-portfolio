import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

const APP_SECRET = "change-this-secret";

async function signup(parent, args, context) {
  const password = await bcrypt.hash(args.password, 10);
  const user = await context.prisma.createUser({ ...args, password });

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return {
    token,
    user
  };
}

async function login(parent, args, context) {
  const user = await context.prisma.user({ email: args.email });
  if (!user) {
    throw new Error("No such user found");
  }

  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error("Invalid password");
  }

  return {
    token: jwt.sign({ userId: user.id }, APP_SECRET),
    user
  };
}

export default {
  createDraft,
  publish,
  deletePost,
  signup,
  login
};
