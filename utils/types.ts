import { LinkFragment } from "../generated/sdk";
import { G } from "@mobily/ts-belt";

type RequiredNotNull<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};

type SetNonNullable<T, K extends keyof T> = T & RequiredNotNull<Pick<T, K>>;

export type UsableLinkFragment = SetNonNullable<LinkFragment, "href">;

export const isUsableLink = (
  link: LinkFragment | null
): link is UsableLinkFragment => G.isObject(link) && G.isString(link.href);
