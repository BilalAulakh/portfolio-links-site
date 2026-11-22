// Edit your profile and links here.

export type SocialType =
  | "instagram"
  | "facebook"
  | "whatsapp"
  | "tiktok"
  | "youtube"
  | "snapchat"
  | "email"
  | "channel"
  | "register";
export type BrandKey = "signals" | "exness" | "instagram" | "facebook" | "tiktok" | "youtube" | "whatsapp";

export interface Profile {
  name: string;
  avatar: string;
  /** Shown if the avatar image is missing */
  logo: string;
  bio: string;
  tagline: string;
  website: string;
}

export interface Social {
  type: SocialType;
  href: string;
  /** Tooltip / screen-reader text (defaults to the type) */
  label?: string;
}

export interface Highlight {
  value: string;
  label: string;
}

export interface LinkItem {
  title: string;
  /** Small grey line under the title */
  subtitle?: string;
  /** Highlight this card with the gold gradient */
  featured?: boolean;
  href: string;
  /** Image path in /public (e.g. "/car.jpg") or a brand key */
  thumb: BrandKey | `/${string}`;
  /** Brand icon shown if the image fails to load */
  fallback?: BrandKey;
}

const SITE = "https://www.asianfxsignals.com";

export const profile: Profile = {
  name: "BABA BTC",
  avatar: "/avatar.jpg",
  logo: "/logo-mark.png",
  bio: "Trader | Traveller | Lifestyle",
  tagline: "Gold, Forex & Crypto signals delivered live.",
  website: SITE,
};

// Small stats row under the name (same offer as the website)


// Small icon row
export const socials: Social[] = [
  // { type: "instagram", href: "https://www.instagram.com/fx_asians" },
  // { type: "facebook", href: "https://www.facebook.com/share/1FG31rJR5R/" },
  { type: "channel", href: "https://whatsapp.com/channel/0029VbBWid2A89MZMwUPKY3E", label: "WhatsApp channel for Signals" },
  { type: "whatsapp", href: "https://wa.me/923081339928", label: "WhatsApp chat support" },
  { type: "register", href: "https://www.asianfxsignals.com/register", label: "Influencer - register" },
];

// Big link buttons
export const links: LinkItem[] = [
  { title: "WhatsApp channel for Signals", subtitle: "Daily setups & live alerts", href: "https://whatsapp.com/channel/0029VbBWid2A89MZMwUPKY3E", thumb: "/car.jpg", fallback: "whatsapp", featured: true },
  { title: "WhatsApp chat support", subtitle: "Message us directly", href: "https://wa.me/923081339928", thumb: "whatsapp" },
  { title: "Influencer", subtitle: "Asian FX Signals", href: "https://www.asianfxsignals.com/register", thumb: "/logo-mark.png", fallback: "signals" },
  // { title: "Instagram", subtitle: "", href: "https://www.instagram.com/fx_asians", thumb: "instagram" },
  // { title: "Facebook", subtitle: "", href: "https://www.facebook.com/share/1FG31rJR5R/", thumb: "facebook" },
  // { title: "TikTok", subtitle: "", href: "https://tiktok.com/", thumb: "tiktok" },
  // { title: "YouTube",  href: "https://youtube.com/@rebel_tradess", thumb: "youtube" },
];
