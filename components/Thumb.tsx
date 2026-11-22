"use client";
import { useState } from "react";
import { FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from "react-icons/fa";
import type { BrandKey, LinkItem } from "@/app/data";

function Brand({ name }: { name?: BrandKey }) {
  switch (name) {
    case "exness":
      return <div className="thumb thumb-exness">exness</div>;
    case "instagram":
      return <div className="thumb thumb-instagram"><FaInstagram /></div>;
    case "tiktok":
      return <div className="thumb thumb-tiktok"><FaTiktok /></div>;
    case "youtube":
      return <div className="thumb thumb-youtube"><FaYoutube /></div>;
    case "whatsapp":
    default:
      return <div className="thumb thumb-whatsapp"><FaWhatsapp /></div>;
  }
}

type ThumbProps = Pick<LinkItem, "thumb" | "fallback">;

export default function Thumb({ thumb, fallback }: ThumbProps) {
  const [failed, setFailed] = useState(false);
  const isImage = thumb.startsWith("/");

  if (isImage && !failed) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img className="thumb" src={thumb} alt="" onError={() => setFailed(true)} />;
  }
  return <Brand name={isImage ? fallback : (thumb as BrandKey)} />;
}
