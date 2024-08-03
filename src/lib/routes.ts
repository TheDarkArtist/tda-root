/**
 * A list of routes that are accessible to all users without requiring authentication.
 * These routes are publicly available and do not require the user to be logged in.
 * @type {string[]}
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * An array of route paths that are used for authentication.
 * These routes might include login, registration, password reset, and other authentication-related endpoints.
 * The routes specified here are intended to be handled by authentication logic.
 * These routes will redirect logged in users to /
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error/",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * The base URL path used for API routes related to authentication.
 * This prefix is used for all routes that involve user authentication processes
 * such as login, registration, and password reset.
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default URL to which users are redirected after a successful login.
 * This is typically used to redirect users to the homepage or dashboard upon logging in.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/";
