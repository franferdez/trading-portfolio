import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { encryptor } from "../utils/";
import { ERROR } from "../constants";
import { createTokens } from "../authentication/_handle-tokens";
import { AUTH } from "../config";

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

// ************************* USER LOGIC ********************************

const User = {
  validate: async (username, password) => {
    const validUser =
      users.filter(u => u.username === username).length > 0
        ? users.filter(u => u.username === username)[0]
        : undefined;
    if (validUser) {
      const validPassword = await encryptor.verify(
        { digest: password },
        validUser.password
      );
      if (!validPassword) {
        throw new Error(ERROR.USER.WRONG_PASSWORD);
      }
      return validUser;
    }
    throw new Error(ERROR.USER.WRONG_CREDENTIALS);
  },
  getPassword: async id => {
    const validUser =
      users.filter(u => u.id === id).length > 0
        ? users.filter(u => u.id === id)[0]
        : undefined;
    if (validUser) {
      return validUser.password;
    }
    throw new Error(ERROR.USER.DOES_NOT_EXIST);
  }
  // all: async () => users,
};

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

export const authResolvers = {
  // logout: () => {
  //   return "ok"; // This is gonna be taken care in server > formatResponse
  // },
  login: async (parent, args, context) => {
    const { email, password } = args;
    //const user = await User.validate(username, password);
    const user = await context.prisma.user({ email });

    if (user) {
      const validPassword = await encryptor.verify(
        { digest: password },
        user.password
      );

      if (!validPassword) {
        throw new Error(ERROR.USER.WRONG_PASSWORD);
      }

      const additionalClaims = {};
      const userData = {
        id: user.id,
        name: user.name,
        email: user.email
        // roles: user.roles,
        // permissions: user.permissions
      };
      const [token, refreshToken] = await createTokens(
        {
          user: userData,
          refreshTokenSecret: user.password + AUTH.SECRET_REFRESH_TOKEN
        },
        additionalClaims
      );

      const response = JSON.stringify({
        token,
        refreshToken
      });
      return response;
      //return { token, refreshToken };
    }
    //return null;
    throw new Error(ERROR.USER.WRONG_CREDENTIALS);
  }
};

export default {
  createDraft,
  publish,
  deletePost,
  signup,
  // login,
  ...authResolvers
};
