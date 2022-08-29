import { listAll, ref } from "firebase/storage";
import { ImageItem } from "../constants";
import { storage } from "../firebase";
import { formatFileName } from "../utils";
import { buildURL } from "../utils/buildURL";

export const fetchAll = async (path: string, ignore?: boolean) => {
  const imagesRef = ref(storage, `images/${path}`);
  let result: Array<ImageItem> = [];

  if (!ignore) {
    const { items } = await listAll(imagesRef);

    if (items) {
      items.map(async (item) => {
        result.push({
          name: formatFileName(item.name),
          url: buildURL(item),
          prefix: item.parent?.name,
        });
      });
    }
  }
  return result;
};
