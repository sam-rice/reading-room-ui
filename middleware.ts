import { NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest) {
  const authToken = req.cookies.get("token")?.value

  if (!authToken) {
    return NextResponse.redirect(new URL("/login", req.url))
  } else if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/shelves", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/shelves/:path*",
    "/book/:path*",
    "/author/:path*",
    "/",
    "/browse/:path*",
  ],
}
