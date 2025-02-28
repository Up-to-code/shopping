import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
 '/',
 '/login(.*)',
 '/register(.*)',
 '/logout',
 '/api/webhook/clerk',
 '/category/(.*)',
 '/product/(.*)',
 '/about',
 '/contact',
 '/search',
 '/api/(.*)',
])

export default clerkMiddleware((auth, request) => {
 if (!isPublicRoute(request)) {
   auth.protect()
 }
})

export const config = {
 matcher: [
   // Skip Next.js internals and all static files
   '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
   // Always run for API routes
   '/(api|trpc)(.*)',
 ],
}