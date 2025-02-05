import dotenv from "dotenv";
/**
 * Setup environment
 */
export const setupEnvironment = (env) => {
    dotenv.config({
        path: getPath(env),
    });
};
/**
 * Get path of environment file
 * .env (git ignored) is used in production mode.
 * .env.test (git ignored) are used in test mode.
 */
const getPath = (env) => {
    return env === "test" ? ".env.test" : ".env";
};
export default dotenv;
