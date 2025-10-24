import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // ✅ Skip static & Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // ✅ Supported locales
  const locales = ["uz", "ru"];

  // ✅ If already has locale (like /uz or /ru), continue
  const hasLocale = locales.some((locale) =>
    pathname.startsWith(`/${locale}`)
  );
  if (hasLocale) {
    return NextResponse.next();
  }

  // ✅ Redirect "/" or any route without locale → default "/uz"
  const url = request.nextUrl.clone();
  url.pathname = `/uz${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
