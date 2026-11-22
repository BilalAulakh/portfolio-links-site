/**
 * TikTok's in-app browser blocks some sites (WhatsApp, for example) and shows
 * "Open this link in your browser" instead. These helpers detect that browser
 * and build a URL that hands the link to the phone's real browser / app.
 */

export function isTikTokBrowser(ua: string = navigator.userAgent) {
  return /musical_ly|bytedance|tiktok|trill_/i.test(ua);
}

/** URL that opens `href` outside the in-app browser, or null if not possible. */
export function escapeUrl(href: string, ua: string = navigator.userAgent): string | null {
  if (!/^https?:\/\//i.test(href)) return null; // mailto:, tel: etc. already work

  // iPhone/iPad: "x-safari-https://..." opens the link in Safari (iOS 17+)
  if (/iphone|ipad|ipod/i.test(ua)) return `x-safari-${href}`;

  // Android: an intent lets the system pick the right app (WhatsApp, Chrome...)
  if (/android/i.test(ua)) {
    const u = new URL(href);
    const scheme = u.protocol.replace(":", "");
    return `intent://${u.host}${u.pathname}${u.search}#Intent;scheme=${scheme};action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(href)};end`;
  }
  return null;
}
