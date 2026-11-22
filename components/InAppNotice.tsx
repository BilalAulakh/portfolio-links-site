"use client";
import { useEffect, useState } from "react";
import { isTikTokBrowser } from "./inApp";

/** Shown only inside TikTok's browser, as a fallback if a link is still blocked. */
export default function InAppNotice() {
  const [show, setShow] = useState(false);
  useEffect(() => setShow(isTikTokBrowser()), []);
  if (!show) return null;

  return (
    <p className="inapp-notice" role="note">
      Link not opening? Tap <strong>•••</strong> at the top right, then <strong>Open in browser</strong>.
    </p>
  );
}
