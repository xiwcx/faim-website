import type { GetStaticProps, NextPage } from "next";
import LayoutDefault from "../components/layout-default/layout-default";
import { GetReleasesQuery, ReleaseFragment } from "../generated/sdk";
import { ReleaseList } from "../components/release-list/release-list";
import { A, G } from "@mobily/ts-belt";
import { sdk } from "../utils/sdk";

interface HomeProps {
  data: GetReleasesQuery;
}

const isRelease = (
  release: ReleaseFragment | null
): release is ReleaseFragment =>
  G.isObject(release) && G.isString(release.title);

const Home: NextPage<HomeProps> = ({ data }) => {
  const releases = data.releaseCollection?.items || [];
  const filteredReleases = releases.filter(isRelease);

  return (
    <LayoutDefault>
      {A.isNotEmpty(filteredReleases) && (
        <ReleaseList releases={filteredReleases}></ReleaseList>
      )}
    </LayoutDefault>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await sdk.getReleases();

  return { props: { data } };
};

export default Home;
