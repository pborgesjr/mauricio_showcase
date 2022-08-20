import { getDownloadURL, listAll, StorageReference } from "firebase/storage";
import { ImageItem } from "../constants";
import { formatFileName } from "../utils";

export const fetchAll = async (
  imagesRef: StorageReference,
  ignore?: boolean
) => {
  let result: Array<ImageItem> = [];

  if (!ignore) {
    const { items } = await listAll(imagesRef);

    if (items) {
      items.map(async (item) => {
        const url = await getDownloadURL(item);

        result.push({
          name: formatFileName(item.name),
          url,
          prefix: item.parent?.name,
        });
        /* setImageList((prevState) => [
          ...prevState,
          {
            name: formatFileName(item.name),
            url,
            prefix: item.parent?.name,
          },
        ]); */
      });
    }
  }
  return result;
};
