import type { ReleaseFragment } from "../../generated/sdk";
import { Release } from "./release";
import * as styles from "./release-list.css";

interface ReleaseListProps {
  releases: ReleaseFragment[];
}

export const ReleaseList = ({ releases }: ReleaseListProps) => {
  return (
    <div className={styles.releaseList}>
      {releases.map((r) => (
        <Release key={r.title} release={r} />
      ))}
    </div>
  );
};
