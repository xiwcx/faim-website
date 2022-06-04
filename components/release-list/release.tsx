import { G } from "@mobily/ts-belt";
import type { ReleaseFragment } from "../../generated/sdk";
import { ReleaseLink } from "./release-link";

interface ReleaseProps {
  release: ReleaseFragment;
}

export const Release = ({ release }: ReleaseProps) => {
  return (
    <div style={{ textAlign: "center" }}>
      <p>{release.title}</p>

      {G.isObject(release.cover) && G.isString(release.cover?.url) && (
        <img src={release.cover.url} />
      )}

      <ul>
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
