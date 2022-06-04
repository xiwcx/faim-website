import type { ReleaseFragment } from "../../generated/sdk";
import { Release } from "./release";

interface ReleaseListProps {
  releases: ReleaseFragment[];
}

export const ReleaseList = ({ releases }: ReleaseListProps) => {
  return (
    <div style={{ textAlign: "center" }}>
      {releases.map((r) => (
        <Release key={r.title} release={r} />
      ))}
    </div>
  );
};
