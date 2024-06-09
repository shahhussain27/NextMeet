import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

// console.log("middleware...");

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
