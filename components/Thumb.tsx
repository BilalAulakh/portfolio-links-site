"use client";
import { useImageFailed } from "./useImageFailed";
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import type { BrandKey, LinkItem } from "@/app/data";

function Brand({ name }: { name?: BrandKey }) {
  switch (name) {
    case "signals":
      return <span className="thumb thumb-gold"><FiTrendingUp /></span>;
    case "exness":
      return <span className="thumb thumb-text">ex</span>;
    case "instagram":
      return <span className="thumb"><FaInstagram /></span>;
    case "facebook":
      return <span className="thumb"><FaFacebookF /></span>;
    case "tiktok":
      return <span className="thumb"><FaTiktok /></span>;
    case "youtube":
      return <span className="thumb"><FaYoutube /></span>;
    case "whatsapp":
    default:
      return <span className="thumb"><FaWhatsapp /></span>;
  }
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
