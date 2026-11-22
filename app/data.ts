// Edit your profile and links here.

export type SocialType =
  | "instagram"
  | "facebook"
  | "whatsapp"
  | "tiktok"
  | "youtube"
  | "snapchat"
  | "email";
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
  name: "Asian Fx",
  avatar: "/avatar.jpg",
  logo: "/logo-mark.png",
  bio: "Trader | Traveller | Lifestyle",
  tagline: "Gold, Forex & Crypto signals — delivered live.",
  website: SITE,
};

// Small stats row under the name (same offer as the website)
export const highlights: Highlight[] = [
  { value: "$1", label: "per signal" },
  { value: "$10", label: "min deposit" },
  { value: "SL", label: "next one free" },
];

// Small icon row
export const socials: Social[] = [
  { type: "instagram", href: "https://www.instagram.com/fx_asians" },
  { type: "facebook", href: "https://www.facebook.com/share/1FG31rJR5R/" },
  { type: "whatsapp", href: "https://wa.me/" },
  { type: "tiktok", href: "https://tiktok.com/" },
  { type: "youtube", href: "https://youtube.com/@rebel_tradess" },
  { type: "email", href: "mailto:info@asianfxsignals.com" },
];

// Big link buttons
export const links: LinkItem[] = [
  { title: "Get Live Signals", subtitle: "Entry · TP · SL — on your dashboard", href: `${SITE}/register`, thumb: "signals", featured: true },
  { title: "WhatsApp channel for Signals", subtitle: "Daily setups & live alerts", href: "https://whatsapp.com/channel/", thumb: "/car.jpg", fallback: "whatsapp" },
  { title: "Exness partner link", subtitle: "Open your trading account", href: "https://www.exness.com/", thumb: "exness" },
  { title: "Instagram", subtitle: "@fx_asians", href: "https://www.instagram.com/fx_asians", thumb: "instagram" },
  { title: "Facebook", subtitle: "Community & updates", href: "https://www.facebook.com/share/1FG31rJR5R/", thumb: "facebook" },
  { title: "TikTok", subtitle: "Short trading clips", href: "https://tiktok.com/", thumb: "tiktok" },
  { title: "YouTube", subtitle: "@rebel_tradess · Full breakdowns", href: "https://youtube.com/@rebel_tradess", thumb: "youtube" },
];
