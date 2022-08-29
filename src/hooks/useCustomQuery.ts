import { useQuery } from "react-query";
import { fetchAll } from "../services/fetch";

export const useCustomQuery = (queryKey: string, enabled: boolean = true) => {
  return useQuery(queryKey, () => fetchAll(queryKey), { enabled });
};
