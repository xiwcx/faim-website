import type { GetStaticProps, NextPage } from "next";
import { GraphQLClient } from "graphql-request";
import LayoutDefault from "../components/layout-default/layout-default";
import {
  GetReleasesQuery,
  getSdk,
  Release,
  ReleaseFragment,
} from "../generated/sdk";
import { ReleaseList } from "../components/release-list/release-list";
import { A, G } from "@mobily/ts-belt";

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
  const client = new GraphQLClient(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      headers: {
        authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    }
  );
  const sdk = getSdk(client);
  const data = await sdk.getReleases();

  return { props: { data } };
};

export default Home;
