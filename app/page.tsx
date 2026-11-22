import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaTiktok,
  FaYoutube,
  FaSnapchatGhost,
  FaBullhorn,
} from "react-icons/fa";
import { FiArrowUpRight, FiMail, FiUserPlus } from "react-icons/fi";
import { profile, socials, links, type SocialType } from "./data";
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
  channel: FaBullhorn,
  register: FiUserPlus,
};

// Used for the staggered fade-in
const delay = (i: number) => ({ "--d": `${i * 70}ms` }) as CSSProperties;

export default function Home() {
  return (
    <main className="page">
      <section className="profile reveal" style={delay(0)}>
        <div className="avatar-wrap">
          <Avatar src={profile.avatar} fallbackSrc={profile.logo} name={profile.name} />
          
        </div>

     

        <h1>{profile.name}</h1>
        <p className="tagline">{profile.tagline}</p>

       

        <nav className="socials">
          {socials.map(({ type, href, label = type }) => {
            const Icon = socialIcons[type];
            return (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                <Icon />
              </a>
            );
          })}
        </nav>
      </section>

      <ul className="links">
        {links.map((link, i) => (
          <li key={link.title} className="reveal" style={delay(i + 1)}>
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
              <span className="arrow" aria-hidden>
                <FiArrowUpRight />
              </span>
            </a>
          </li>
        ))}
      </ul>

      <footer className="footer reveal" style={delay(links.length + 1)}>
        <p>Signals only — you trade on your own behalf. Trading involves risk.</p>
        <p>© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </main>
  );
}
