import { IconAppleMusic } from "../icons/apple-music";
import { IconBandcap } from "../icons/bandcamp";
import { IconSpotify } from "../icons/spotify";
import { IconYoutubeMusic } from "../icons/youtube-music";
import * as styles from "./release.css";

type Brand = "apple" | "youtube" | "spotify" | "bandcamp";

interface ReleaseLinkProps {
  brand: Brand;
  href: string;
}

const data: Record<Brand, { label: string; icon: React.ReactNode }> = {
  apple: { label: "apple music", icon: <IconAppleMusic /> },
  bandcamp: { label: "bandcamp", icon: <IconBandcap /> },
  spotify: { label: "spotify", icon: <IconSpotify /> },
  youtube: { label: "youtube music", icon: <IconYoutubeMusic /> },
};

export const ReleaseLink = ({ brand, href }: ReleaseLinkProps) => {
  return (
    <li className={styles[brand]}>
      <a href={href} aria-label={data[brand].label}>
        {data[brand].icon}
      </a>
    </li>
  );
};
