"use client";
import type { IconType } from "react-icons";
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import { useImageFailed } from "./useImageFailed";
import type { BrandKey, LinkItem } from "@/app/data";

const brandIcons: Record<Exclude<BrandKey, "exness">, IconType> = {
  signals: FiTrendingUp,
  instagram: FaInstagram,
  facebook: FaFacebookF,
  tiktok: FaTiktok,
  youtube: FaYoutube,
  whatsapp: FaWhatsapp,
};

function Brand({ name = "whatsapp" }: { name?: BrandKey }) {
  if (name === "exness") {
    return <span className="thumb thumb-exness">ex</span>;
  }
  const Icon = brandIcons[name];
  return (
    <span className={`thumb thumb-${name}`}>
      <Icon />
    </span>
  );
}

type ThumbProps = Pick<LinkItem, "thumb" | "fallback">;

export default function Thumb({ thumb, fallback }: ThumbProps) {
  const { ref, failed, onError } = useImageFailed(thumb);
  const isImage = thumb.startsWith("/");

  if (isImage && !failed) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img ref={ref} className="thumb thumb-img" src={thumb} alt="" onError={onError} />;
  }
  return <Brand name={isImage ? fallback : (thumb as BrandKey)} />;
}
