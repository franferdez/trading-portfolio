import passport from "passport";
import passportJWT from "passport-jwt";
import jwt from "jsonwebtoken";

// generate a jwt token for testing purposes
console.log(jwt.sign(users[0], JWT_SECRET));

const params = {
  secretOrKey: JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

const strategy = new Strategy(params, (payload, done) => {
  const user = users.find(user => user.id === payload.id) || null;

  return done(null, user);
});

passport.use(strategy);

passport.initialize();

export const authMiddleware = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (user) {
      req.user = user;
    }

    next();
  })(req, res, next);
};

export default authMiddleware;
