"use client";
import { useState } from "react";

interface AvatarProps {
  src: string;
  /** Used when `src` is missing */
  fallbackSrc: string;
  name: string;
}

export default function Avatar({ src, fallbackSrc, name }: AvatarProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="avatar-ring">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`avatar${failed ? " avatar-logo" : ""}`}
        src={failed ? fallbackSrc : src}
        alt={name}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
