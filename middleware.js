// middleware.js（修正版）
import { createClient, OAuthStrategy } from "@wix/sdk";
import { NextResponse } from "next/server";

// ここを相対に変更（middleware.js はリポジトリ直下なので ./src/... ）
import { CLIENT_ID } from "./src/constants/constants";
import { installedApps, WixApplications } from "./src/internal/utils/installed-apps";

// 以降はそのまま
export async function middleware(request) {
  const path = request.nextUrl.pathname;

  if (!request.cookies.get("session")) {
    const myWixClient = createClient({
      auth: OAuthStrategy({ clientId: CLIENT_ID }),
    });

    try {
      const visitorTokens = await myWixClient.auth.generateVisitorTokens();
      request.cookies.set("session", JSON.stringify(visitorTokens));
      const response = NextResponse.next({ request });
      response.cookies.set("session", JSON.stringify(visitorTokens));
      return response;
    } catch {
      const message = "Make sure you are using a valid CLIENT_ID";
      return NextResponse.redirect(
        new URL(`/internal/error?message=${message}`, request.url)
      );
    }
  }

  const appPaths = {
    "/booking": { type: WixApplications.BOOKINGS, name: "Bookings" },
    "/store": { type: WixApplications.STORE, name: "Store" },
    "/events": { type: WixApplications.EVENTS, name: "Events" },
    "/subscriptions": { type: WixApplications.SUBSCRIPTIONS, name: "Subscriptions" },
  };

  if (path in appPaths) {
    const installedAppsList = await installedApps();
    if (!installedAppsList.includes(appPaths[path].type)) {
      return NextResponse.redirect(
        new URL(`/404?app=${appPaths[path].name}`, request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  unstable_allowDynamic: [
    "**/node_modules/lodash/lodash.js",
    "**/node_modules/lodash/_root.js",
  ],
  matcher: "/",
};
