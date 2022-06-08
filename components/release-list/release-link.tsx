import { style } from "@vanilla-extract/css";
import { IconAppleMusic } from "../icons/apple-music";
import { IconBandcap } from "../icons/bandcamp";
import { IconSpotify } from "../icons/spotify";
import { IconYoutubeMusic } from "../icons/youtube-music";
import * as styles from "./release-link.css";

type Brand = "apple" | "youtube" | "spotify" | "bandcamp";

interface ReleaseLinkProps {
  brand: Brand;
  href: string;
}

const data: Record<Brand, { label: string; icon: React.ReactNode }> = {
  apple: {
    label: "Apple Music",
    icon: <IconAppleMusic />,
  },
  bandcamp: {
    label: "Bandcamp",
    icon: <IconBandcap />,
  },
  spotify: { label: "Spotify", icon: <IconSpotify /> },
  youtube: {
    label: "Youtube Music",
    icon: <IconYoutubeMusic />,
  },
};

export const ReleaseLink = ({ brand, href }: ReleaseLinkProps) => {
  return (
    <li className={styles.li}>
      <a className={styles.link} href={href}>
        <div className={styles.icon}>{data[brand].icon}</div>
        Listen on {data[brand].label}
      </a>
    </li>
  );
};
