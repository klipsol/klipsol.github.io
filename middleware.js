import { NextResponse } from 'next/server';

export function middleware(req) {
	const host = req.headers.get('host') || '';
	const subdomain = host.split('.')[0];

	if (subdomain && subdomain !== 'dpanda' && subdomain !== 'www') {
		const url = req.nextUrl.clone();
		url.pathname = `/publisher/${subdomain}${url.pathname}`;
		return NextResponse.rewrite(url);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
