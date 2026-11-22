"use client";
import { useState } from "react";

interface AvatarProps {
  src: string;
  name: string;
}

export default function Avatar({ src, name }: AvatarProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    const initials = name.split(" ").map((w) => w[0]).join("").slice(0, 2);
    return <div className="avatar avatar-fallback">{initials}</div>;
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img className="avatar" src={src} alt={name} onError={() => setFailed(true)} />;
}
