// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Only protect specific routes
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)", // Match dashboard and nested routes
]);

export default clerkMiddleware(async (auth, req) => {
  const user = auth();

  if (isProtectedRoute(req)) {
    if (!user) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // These routes go through middleware
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
