import { getToken } from 'next-auth/jwt';
// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextRequest, NextResponse } from 'next/server';
import { first } from 'lodash';
import { isProduction } from '@/utils/common';

const allowedRoutes = [
  '/api/categories',
  '/api/resources/lookup',
  '/api/requests/new',
  '/api/auth/csrf',
  '/api/auth/session',
  '/api/auth/providers',
  '/api/auth/callback/app-login',
];

const urlWithoutQueryStrings = (url: string) => {
  return first(url.split('?')) || '/';
};

export async function middleware(req: NextRequest) {
  const url = urlWithoutQueryStrings(req.url);

  /*if (allowedRoutes.includes(url)) {
    return NextResponse.next();
  }

  // @ts-ignore
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET, secureCookie: isProduction() });

  if (!session) {
    return new Response(JSON.stringify({ message: 'Not authenticated!' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }*/

  //return NextResponse.next();

  return NextResponse.next();
}
