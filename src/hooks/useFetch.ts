import {
  getDownloadURL,
  listAll,
  ref,
  StorageReference,
} from "firebase/storage";
import { useState, useEffect } from "react";
import { ImageItem } from "../constants";
import { storage } from "../firebase";
import { formatFileName } from "../utils";

export const useFetch = (path: string) => {
  let ignore = false;
  const INITIAL_VALUE = () => [];

  const [imageList, setImageList] = useState<Array<ImageItem>>(INITIAL_VALUE);
  const imagesRef = ref(storage, `images/${path}`);

  const fetchAll = async () => {
    if (!ignore) {
      const { items } = await listAll(imagesRef);

      if (items) {
        items.map(async (item) => {
          const url = await getDownloadURL(item);
          setImageList((prevState) => [
            ...prevState,
            {
              name: formatFileName(item.name),
              url,
              prefix: item.parent?.name,
            },
          ]);
        });
      }
    }
  };

  useEffect(() => {
    fetchAll();

    return () => {
      ignore = true;
    };
  }, [path]);

  return imageList;
};
