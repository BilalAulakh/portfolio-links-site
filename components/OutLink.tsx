"use client";
import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { escapeUrl, isTikTokBrowser } from "./inApp";

type OutLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/** External link that also works inside TikTok's in-app browser. */
export default function OutLink({ href, onClick, ...rest }: OutLinkProps) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e);
    if (e.defaultPrevented || !isTikTokBrowser()) return;
    const escaped = escapeUrl(href);
    if (!escaped) return;
    e.preventDefault();
    window.location.href = escaped;
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick} {...rest} />;
}
