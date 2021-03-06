import type { GetStaticProps, NextPage } from "next";
import LayoutDefault from "../../components/layout-default/layout-default";
import { GetLinksQuery } from "../../generated/sdk";
import { sdk } from "../../utils/sdk";
import { A } from "@mobily/ts-belt";
import { LinkList } from "../../components/link-list/link-list";
import { isUsableLink } from "../../utils/types";

interface LinkProps {
  data: GetLinksQuery;
}

const Links: NextPage<LinkProps> = ({ data }) => {
  const links = data.linkCollection?.items || [];
  const filteredLinks = links.filter(isUsableLink);

  return (
    <LayoutDefault>
      <LinkList links={filteredLinks} />
    </LayoutDefault>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await sdk.getLinks();

  return { props: { data } };
};

export default Links;
