import type { IconType } from "react-icons";
import { FaInstagram, FaWhatsapp, FaTiktok, FaYoutube, FaSnapchatGhost } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { profile, socials, links, type SocialType } from "./data";
import Avatar from "@/components/Avatar";
import Thumb from "@/components/Thumb";
import ShareButton from "@/components/ShareButton";

const socialIcons: Record<SocialType, IconType> = {
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
  tiktok: FaTiktok,
  youtube: FaYoutube,
  snapchat: FaSnapchatGhost,
};

export default function Home() {
  return (
    <main className="page">
 

      <section className="profile">
        <Avatar src={profile.avatar} name={profile.name} />
        <h1>{profile.name}</h1>
        {/* <p className="bio">{profile.bio}</p>
        <p className="bio">{profile.tagline}</p> */}

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
        {links.map((link) => (
          <li key={link.title}>
            <a className="link-card" href={link.href} target="_blank" rel="noopener noreferrer">
              <Thumb thumb={link.thumb} fallback={link.fallback} />
              <span className="link-title">{link.title}</span>
              <FiMoreVertical className="more" aria-hidden />
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
