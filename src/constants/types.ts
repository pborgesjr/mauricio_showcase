export type ImageItem = {
  name: string;
  url: string;
  prefix?: string;
};

export interface LinkType {
  name: string;
  path?: string;
}

export interface ImageType {
  filename: string;
  folder: string;
  url: string;
  publicId: string;
}
