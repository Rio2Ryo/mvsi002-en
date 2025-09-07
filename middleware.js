import { NextResponse } from 'next/server';
import { createClient, OAuthStrategy } from '@wix/sdk';

// middleware.jsでは環境変数の頭に 'NEXT_PUBLIC_' を付けません
const wixClient = createClient({
  auth: OAuthStrategy({ clientId: process.env.CLIENT_ID }),
});

export async function middleware(request) {
  const cookies = request.cookies;
  const session = cookies.get('session');

  if (!session?.value) {
    const tokens = await wixClient.auth.generateVisitorTokens();
    const response = NextResponse.next();
    response.cookies.set('session', JSON.stringify(tokens));
    return response;
  }

  return NextResponse.next();
}