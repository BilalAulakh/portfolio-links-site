// Edit your profile and links here.

export type SocialType = "instagram" | "whatsapp" | "tiktok" | "youtube" | "snapchat";
export type BrandKey = "exness" | "instagram" | "tiktok" | "youtube" | "whatsapp";

export interface Profile {
  name: string;
  avatar: string;
  bio: string;
  tagline: string;
}

export interface Social {
  type: SocialType;
  href: string;
}

export interface LinkItem {
  title: string;
  href: string;
  /** Image path in /public (e.g. "/car.jpg") or a brand key */
  thumb: BrandKey | `/${string}`;
  /** Brand icon shown if the image fails to load */
  fallback?: BrandKey;
}

export const profile: Profile = {
  name: "Asian Fx",
  avatar: "/avatar.jpg",
  bio: "Trader | Traveller | Lifestyle",
  tagline: "$100k/yearly 🇵🇰🇲🇾🇮🇩🇸🇦",
};

// Small icon row under the bio
export const socials: Social[] = [
  { type: "instagram", href: "https://instagram.com/" },
  { type: "whatsapp", href: "https://wa.me/" },
  { type: "tiktok", href: "https://tiktok.com/" },
  { type: "youtube", href: "https://youtube.com/@rebel_tradess" },
  { type: "snapchat", href: "https://snapchat.com/" },
];

// Big link buttons
export const links: LinkItem[] = [
  { title: "WhatsApp channel for Signals", href: "https://whatsapp.com/channel/", thumb: "/car.jpg", fallback: "whatsapp" },
  { title: "Exness partner link", href: "https://www.exness.com/", thumb: "exness" },
  { title: "Instagram", href: "https://instagram.com/", thumb: "instagram" },
  { title: "TikTok", href: "https://tiktok.com/", thumb: "tiktok" },
  { title: "@rebel_tradess", href: "https://youtube.com/@rebel_tradess", thumb: "youtube" },
  { title: "Rebel Fx Official 🏦", href: "https://whatsapp.com/channel/", thumb: "/car.jpg", fallback: "whatsapp" },
];
