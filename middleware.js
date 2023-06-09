import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request){
	const session=await getToken({req:request});
	const path=request.nextUrl.pathname;

	// if( session == null && path !== '/login' && path !== '/api/auth/signin'){
	// 	return NextResponse.redirect(new URL('/api/auth/signin', request.url));
	// }

	NextResponse.next();
}