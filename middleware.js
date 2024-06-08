import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware(
  {
    publicRoutes: ["/api/webhook"],
  },
  { debug: true }
);

// console.log("middleware...");

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
