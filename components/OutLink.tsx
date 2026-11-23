import type { AnchorHTMLAttributes } from "react";

type OutLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/** External link, opened directly in a new tab. */
export default function OutLink(props: OutLinkProps) {
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}
