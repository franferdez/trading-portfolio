import { WHITELISTED_QUERIES } from "./_queries";
import APP from "./_app.js";

const {
  NAMESPACE = "_",
  STRATEGIES = {},
  CONSTANTS: { HTTP_ONLY = "HTTP_ONLY", LOCAL_STORAGE = "LOCAL_STORAGE" } = {},
  PREFIX = "-x",
  AUTH_HEADER_SUFFIX = "-auth-request-type"
} = APP;

const BASE_AUTH = {
  WHITELISTED_QUERIES,
  STRATEGIES: {
    ...STRATEGIES,
    CLIENT: {
      AUTH_HEADER: `${PREFIX}${NAMESPACE}${AUTH_HEADER_SUFFIX}`,
      HTTP_ONLY,
      LOCAL_STORAGE
    }
  }
};

const EXTENDED_AUTH = {
  ...BASE_AUTH,
  ENDPOINT: process.env.AUTH_ENDPOINT,
  SECRET_TOKEN: process.env.AUTH_SECRET_TOKEN || "secret-1234", //TODO: Fix this
  SECRET_REFRESH_TOKEN: process.env.AUTH_SECRET_REFRESH_TOKEN || "secret-1234",
  USERS_DB: {
    IS_API: false,
    IS_LOCAL: true
  }
};

export default EXTENDED_AUTH;
