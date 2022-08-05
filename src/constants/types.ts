import { RefObject } from "react";

export type ImageItem = {
  name: string;
  url: string;
  prefix?: string;
};

export interface LinkType {
  name: string;
  path?: string;
  ref?: RefObject<HTMLDivElement>;
}
