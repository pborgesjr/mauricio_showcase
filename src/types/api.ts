export type ImageType = {
  id?: string;
  url: string;
  placeholder: string;
};

export type ContactDataResponse = Array<ImageType>;

export type AboutDataResponse = Array<ImageType>;

export type ProjectResponseDataType = {
  id: string;
  name: string;
  isVisible?: boolean;
  description?: string;
  images?: Array<ImageType>;
};
