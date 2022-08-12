import { useState, useEffect } from "react";
import { ImageType } from "../constants";
import { fetchImages } from "../services";

export const useFetch = (folder: string) => {
  let ignore = false;
  const INITIAL_VALUE = () => [];

  const [imageList, setImageList] = useState<Array<ImageType>>(INITIAL_VALUE);

  const handleFetchImages = async () => {
    if (!ignore) {
      const response = await fetchImages(folder);

      if (response) {
        setImageList(response);
      }
    }
  };

  useEffect(() => {
    if (folder) {
      handleFetchImages();
    }

    return () => {
      ignore = true;
    };
  }, [folder]);

  return imageList;
};
