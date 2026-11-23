/**
 * TikTok's in-app browser blocks the links on this page (WhatsApp and
 * asianfxsignals.com both show "Open this link in your browser") and also
 * blocks every trick for jumping out to Safari/Chrome ("Action can't be
 * completed"). So inside TikTok we don't navigate at all: we show a short
 * guide to TikTok's own "••• > Open in browser".
 */

export function isTikTokBrowser(ua: string = navigator.userAgent) {
  return /musical_ly|bytedance|tiktok|trill_/i.test(ua);
}

export function isWebLink(href: string) {
  return /^https?:\/\//i.test(href);
}

/** Event OutLink sends to open the guide (handled by InAppNotice). */
export const BLOCKED_LINK_EVENT = "blocked-link";
