import { G } from "@mobily/ts-belt";
import type { ReleaseFragment } from "../../generated/sdk";
import { Typography } from "../typography/typography";
import { ReleaseLink } from "./release-link";
import * as styles from "./release.css";

interface ReleaseProps {
  release: ReleaseFragment;
}

export const Release = ({ release }: ReleaseProps) => {
  return (
    <div className={styles.releaseContainer}>
      {G.isObject(release.cover) && G.isString(release.cover?.url) && (
        <img className={styles.releaseImage} src={release.cover.url} />
      )}

      <Typography style="h2">{release.title}</Typography>

      <ul className={styles.linkList}>
        {G.isString(release.hrefBandcamp) && (
          <ReleaseLink href={release.hrefBandcamp} brand="bandcamp" />
        )}

        {G.isString(release.hrefSpotify) && (
          <ReleaseLink href={release.hrefSpotify} brand="spotify" />
        )}

        {G.isString(release.hrefYouTube) && (
          <ReleaseLink href={release.hrefYouTube} brand="youtube" />
        )}

        {G.isString(release.hrefAppleMusic) && (
          <ReleaseLink href={release.hrefAppleMusic} brand="apple" />
        )}
      </ul>
    </div>
  );
};
