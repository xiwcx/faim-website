import { LinkFragment } from "../generated/sdk";
import { G } from "@mobily/ts-belt";

type PartiallyNonNullable<T, K extends keyof T> = Omit<T, K> &
  NonNullable<Pick<T, K>>;

export type UsableLinkFragment = PartiallyNonNullable<LinkFragment, "href">;

export const isUsableLink = (link: LinkFragment | null): link is LinkFragment =>
  G.isObject(link) && G.isString(link.href);
