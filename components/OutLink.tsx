"use client";
import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { BLOCKED_LINK_EVENT, isTikTokBrowser, isWhatsAppLink } from "./inApp";

type OutLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/**
 * External link. Inside TikTok, WhatsApp links are blocked, so instead of
 * opening TikTok's error page we show the "Open in browser" guide.
 */
export default function OutLink({ href, onClick, ...rest }: OutLinkProps) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (e.defaultPrevented || !isTikTokBrowser() || !isWhatsAppLink(href)) return;
    e.preventDefault();
    window.dispatchEvent(new CustomEvent(BLOCKED_LINK_EVENT, { detail: href }));
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick} {...rest} />;
}
