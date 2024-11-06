// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get('token')?.value || '';
  const isPublicPath = path === '/connection' || path === '/';

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

 
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/connection', request.url));
  }

  return NextResponse.next();
}


export const config = {
  matcher: [
    '/',
    '/dashboard/:path*',
    '/connection',
  ]
};