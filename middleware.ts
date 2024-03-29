import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  // We need to create a response and hand it to the supabase client to be able to modify the response headers.
  const res = NextResponse.next()
  // Create authenticated Supabase Client.
  const supabase = createMiddlewareClient({ req, res })
  // Check if we have a session
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Check auth condition
  if (user && req.nextUrl.pathname === '/signIn') {
    // Authentication successful, forward request to protected route.
    return NextResponse.redirect(new URL("/", req.url))
  }

    // Check auth condition
    if (! user && req.nextUrl.pathname === '/profile') {
        // Authentication successful, forward request to protected route.
        return NextResponse.redirect(new URL("/signIn", req.url))
      }

       // Check auth condition
    if (! user && req.nextUrl.pathname === '/upload') {
        // Authentication successful, forward request to protected route.
        return NextResponse.redirect(new URL("/signIn", req.url))
      }

  // Auth condition not met, redirect to home page.
  const redirectUrl = req.nextUrl.clone()
  redirectUrl.pathname = '/'
  redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname)
  return NextResponse.redirect(redirectUrl)


return  res
}
export const config = {
  matcher: ['/profile', '/upload', '/signIn'],
}