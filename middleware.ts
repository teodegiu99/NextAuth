import authConfig from "./auth.config";
import NextAuth from "next-auth";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "./routes";

const { auth } = NextAuth(authConfig);
//Middleware allows you to run code before a request is completed.
//Then, based on the incoming request, you can modify the response
//by rewriting, redirecting, modifying the request or response headers,
//or responding directly.

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isSharedRoute = nextUrl.pathname.startsWith("/shared/");

  if (isApiAuthRoute) {
    return ;
  }
  if (isSharedRoute) {
    return ;
  }
  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return ;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }

  return ;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  //tutto quello che metto qua dentro va ad invocare la funzione auth
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}; //con questo middleware vado a invocare il middleware ovunque
