import { GraphQLClient } from "graphql-request";
import { getSdk } from "../generated/sdk";

const client = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
  {
    headers: {
      authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  }
);

export const sdk = getSdk(client);
