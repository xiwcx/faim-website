import type { ReleaseFragment } from "../../generated/sdk";

interface ReleaseProps {
  release: ReleaseFragment;
}

export const Release = ({ release }: ReleaseProps) => {
  return <div style={{ textAlign: "center" }}>{release.title}</div>;
};
