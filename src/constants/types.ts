import { RefObject } from "react";

export type ImageItem = {
  name: string;
  url: string;
  prefix?: string;
};

export interface LinkType {
  path: string;
  ref?: RefObject<HTMLDivElement>;
}
