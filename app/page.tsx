import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaTiktok,
  FaYoutube,
  FaSnapchatGhost,
} from "react-icons/fa";
import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { profile, socials, links, highlights, type SocialType } from "./data";
import Avatar from "@/components/Avatar";
import Thumb from "@/components/Thumb";

const socialIcons: Record<SocialType, IconType> = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  whatsapp: FaWhatsapp,
  tiktok: FaTiktok,
  youtube: FaYoutube,
  snapchat: FaSnapchatGhost,
  email: FiMail,
};

// Used for the staggered fade-in
const delay = (i: number) => ({ "--d": `${i * 70}ms` }) as CSSProperties;

export default function Home() {
  return (
    <main className="page">
      <div className="bg-grid" aria-hidden />
      <div className="glow glow-gold" aria-hidden />
      <div className="glow glow-sky" aria-hidden />

      <a className="brand reveal" style={delay(0)} href={profile.website} target="_blank" rel="noopener noreferrer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={profile.logo} alt="" />
        <span>
          Asian<b>FX</b>
        </span>
      </a>

      <section className="profile reveal" style={delay(1)}>
        <Avatar src={profile.avatar} fallbackSrc={profile.logo} name={profile.name} />
        <h1>{profile.name}</h1>
        <p className="tagline">{profile.tagline}</p>

        <dl className="stats">
          {highlights.map((h) => (
            <div key={h.label}>
              <dt>{h.value}</dt>
              <dd>{h.label}</dd>
            </div>
          ))}
        </dl>

        <nav className="socials">
          {socials.map(({ type, href }) => {
            const Icon = socialIcons[type];
            return (
              <a key={type} href={href} target="_blank" rel="noopener noreferrer" aria-label={type}>
                <Icon />
              </a>
            );
          })}
        </nav>
      </section>

      <ul className="links">
        {links.map((link, i) => (
          <li key={link.title} className="reveal" style={delay(i + 2)}>
            <a
              className={`link-card${link.featured ? " featured" : ""}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Thumb thumb={link.thumb} fallback={link.fallback} />
              <span className="link-text">
                <span className="link-title">{link.title}</span>
                {link.subtitle && <span className="link-sub">{link.subtitle}</span>}
              </span>
              <FiArrowUpRight className="arrow" aria-hidden />
            </a>
          </li>
        ))}
      </ul>

      <footer className="footer reveal" style={delay(links.length + 2)}>
        <p>Signals only — you trade on your own behalf. Trading involves risk.</p>
        <p>© {new Date().getFullYear()} AsianFX</p>
      </footer>
    </main>
  );
}
