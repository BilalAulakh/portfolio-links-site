"use client";
import { FiShare } from "react-icons/fi";

export default function ShareButton({ title }: { title: string }) {
  const share = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // user cancelled
      }
    } else {
      await navigator.clipboard.writeText(url);
      alert("Link copied!");
    }
  };

  return (
    <button className="icon-btn" onClick={share} aria-label="Share">
      <FiShare />
    </button>
  );
}
