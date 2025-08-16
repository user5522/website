import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const { url } = context;
  const pathname = url.pathname;
  const lowercasePath = pathname.toLowerCase();

  if (pathname !== lowercasePath) {
    return Response.redirect(new URL(lowercasePath, url.origin), 301);
  }

  return next();
});
