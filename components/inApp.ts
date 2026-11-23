/** True inside TikTok's in-app browser, which blocks the links on this page. */
export function isTikTokBrowser(ua: string = navigator.userAgent) {
  return /musical_ly|bytedance|tiktok|trill_/i.test(ua);
}
