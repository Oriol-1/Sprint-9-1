import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
 
export async function middleware( req: NextRequest ){
    
    const session: any = await getToken({ req, secret: process.env.NEXTAUTH_SECRET});
    
    if(!session){
        const requestedPage = req.nextUrl.pathname;
        const url = req.nextUrl.clone();
        url.pathname = `/auth/login`;
        url.search = `p=${ requestedPage }`;
 
        return NextResponse.redirect( url );
    }
 
    if( req.nextUrl.pathname === '/checkout/address' || req.nextUrl.pathname === '/checkout/summary') return NextResponse.next();
 
    if( req.nextUrl.pathname.startsWith('/admin') && session.user.role === 'admin' ){
        return NextResponse.next();
    }else{
        const url = req.nextUrl.clone();
        url.pathname = '/';
        return NextResponse.redirect(url);
    }
}
 
export const config = {
    matcher: ['/checkout/address','/checkout/summary','/admin'],
}