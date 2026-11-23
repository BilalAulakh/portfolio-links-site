"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { BLOCKED_LINK_EVENT, isTikTokBrowser } from "./inApp";

function copyText(text: string): boolean {
  // execCommand works in more in-app browsers than navigator.clipboard
  const box = document.createElement("textarea");
  box.value = text;
  box.setAttribute("readonly", "");
  box.style.position = "fixed";
  box.style.opacity = "0";
  document.body.appendChild(box);
  box.select();
  box.setSelectionRange(0, text.length);
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {}
  box.remove();
  if (!ok && navigator.clipboard) {
    navigator.clipboard.writeText(text).catch(() => {});
    ok = true;
  }
  return ok;
}

/** Inside TikTok only: a tip under the icons, and a guide when a link is tapped. */
export default function InAppNotice() {
  const [inTikTok, setInTikTok] = useState(false);
  const [blocked, setBlocked] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setInTikTok(isTikTokBrowser());
    const open = (e: Event) => {
      setCopied(false);
      setBlocked((e as CustomEvent<string>).detail);
    };
    window.addEventListener(BLOCKED_LINK_EVENT, open);
    return () => window.removeEventListener(BLOCKED_LINK_EVENT, open);
  }, []);

  if (!inTikTok) return null;

  return (
    <>
      <p className="inapp-notice" role="note">
        TikTok blocks these links. Tap <strong>•••</strong> at the top right, then{" "}
        <strong>Open in browser</strong>.
      </p>

      {blocked && createPortal(
        <div className="inapp-sheet-backdrop" onClick={() => setBlocked(null)}>
          <div className="inapp-sheet" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <span className="inapp-arrow" aria-hidden>↗</span>
            <h2>Open in your browser</h2>
            <p>TikTok doesn&apos;t allow this link. To open it:</p>
            <ol>
              <li>Tap <strong>•••</strong> at the top right of this screen</li>
              <li>Tap <strong>Open in browser</strong></li>
              <li>Tap the link again</li>
            </ol>
            <button
              className="inapp-btn"
              onClick={() => setCopied(copyText(blocked))}
            >
              {copied ? "Link copied - paste it in Safari / Chrome" : "Or copy the link"}
            </button>
            <button className="inapp-btn inapp-btn-ghost" onClick={() => setBlocked(null)}>
              Close
            </button>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
