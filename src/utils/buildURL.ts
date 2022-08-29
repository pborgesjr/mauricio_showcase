import { StorageReference } from "firebase/storage";

const BASE_URL = "https://firebasestorage.googleapis.com/v0/b";

export const buildURL = (item: StorageReference) => {
  return `${BASE_URL}/${item.bucket}/o/${encodeURIComponent(
    item.fullPath
  )}?alt=media`;
};
