/**
 * TikTok's in-app browser blocks WhatsApp links ("Open this link in your
 * browser") and also blocks every trick for jumping out to Safari/Chrome
 * ("Action can't be completed"). So inside TikTok we don't navigate to
 * WhatsApp at all: we show a short guide to TikTok's own "Open in browser".
 */

export function isTikTokBrowser(ua: string = navigator.userAgent) {
  return /musical_ly|bytedance|tiktok|trill_/i.test(ua);
}

export function isWhatsAppLink(href: string) {
  return /^https?:\/\/([a-z0-9-]+\.)*(whatsapp\.com|wa\.me)(\/|$)/i.test(href);
}

/** Event OutLink sends to open the guide (handled by InAppNotice). */
export const BLOCKED_LINK_EVENT = "blocked-link";
