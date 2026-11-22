"use client";
import { useImageFailed } from "./useImageFailed";

interface AvatarProps {
  src: string;
  /** Used when `src` is missing */
  fallbackSrc: string;
  name: string;
}

export default function Avatar({ src, fallbackSrc, name }: AvatarProps) {
  const { ref, failed, onError } = useImageFailed(src);

  return (
    <div className="avatar-ring">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={ref}
        className={`avatar${failed ? " avatar-logo" : ""}`}
        src={failed ? fallbackSrc : src}
        alt={name}
        onError={onError}
      />
    </div>
  );
}
