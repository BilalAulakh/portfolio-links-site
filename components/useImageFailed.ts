"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether an <img> failed to load.
 * Also catches errors that happened before React hydrated
 * (onError doesn't fire for those on server-rendered images).
 */
export function useImageFailed(src: string) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, [src]);

  return { ref, failed, onError: () => setFailed(true) };
}
