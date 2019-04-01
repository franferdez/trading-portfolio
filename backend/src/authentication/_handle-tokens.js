import jwt from "jsonwebtoken";
import { AUTH, JWT } from "../config";
import { User } from "../models";

const verifyToken = async (token, secret, addSecurityChecks = {}) =>
  new Promise(resolve =>
    jwt.verify(token, secret, { ...addSecurityChecks }, (err, result) => {
      if (err) {
        console.log("VERIFY: JWT ERROR: ", err.message);
        resolve({
          ok: false,
          user: err
        });
      } else {
        resolve({
          ok: true,
          user: result.user
        });
      }
    })
  );

// const signToken = async (
//   user,
//   secret,
//   expiration = 60 * 60,
//   additionalClaims = {}
// ) =>
//   new Promise(resolve =>
//     jwt.sign(
//       { user },
//       secret,
//       {
//         expiresIn: expiration,
//         ...additionalClaims
//       },
//       (err, result) => {
//         if (err) {
//           console.log("SIGN: JWT ERROR: ", err.message);
//           resolve(undefined);
//         } else {
//           resolve(result);
//         }
//       }
//     )
//   );

const signToken = (user, secret, expiration = 60 * 60, additionalClaims = {}) =>
  jwt.sign({ user }, secret, {
    expiresIn: expiration,
    ...additionalClaims
  });

export const createTokens = async (data, additionalClaims = {}) => {
  const { user = {}, refreshTokenSecret = AUTH.SECRET_REFRESH_TOKEN } = data;
  const createToken = await signToken(
    user,
    AUTH.SECRET_TOKEN,
    JWT.HEADER.TOKEN.EXP,
    additionalClaims
  );
  const createRefreshToken = await signToken(
    user,
    refreshTokenSecret,
    JWT.HEADER.REFRESH_TOKEN.EXP,
    additionalClaims
  );

  return [createToken, createRefreshToken];
};

// TODO: ADD FINGERPRINT (UA + ACC.LANG) STRATEGY (WITH xxHash) i.e. addSecurityChecks
// TODO: CONSIDER ALSO OTHER STRATEGIES FOR REVOKING TOKEN BESIDES CONCATENATING USER'S PASSWORD
// TO THE REFRESH SECRET
export const refreshTokens = async refreshToken => {
  const addSecurityChecks = {};

  let userId = 0;
  try {
    const { user: { id } = {} } = jwt.decode(refreshToken);
    userId = id;
  } catch (err) {
    return {};
  }

  if (!userId) {
    return {};
  }

  const userPassword = await User.getPassword(userId);

  if (!userPassword) {
    return {};
  }

  const refreshTokenSecret = userPassword + AUTH.SECRET_REFRESH_TOKEN;
  const { ok, user } = await verifyToken(
    refreshToken,
    refreshTokenSecret,
    addSecurityChecks
  );
  if (ok) {
    const [newToken, newRefreshToken] = await createTokens(
      { user, refreshTokenSecret },
      addSecurityChecks
    );
    return {
      token: newToken,
      refreshToken: newRefreshToken,
      user
    };
  }
  return {};
};
