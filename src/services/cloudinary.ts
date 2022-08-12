import { Cloudinary } from "@cloudinary/url-gen";

//TODO: criar env variable for cloudName
const cloudinaryInstance = new Cloudinary({
  cloud: {
    cloudName: "ppmbjr",
  },
});

export const transformImage = (publicID: string) => {
  return cloudinaryInstance.image(publicID);
};
