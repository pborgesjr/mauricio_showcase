import { useQuery } from "react-query";
import { apiClient } from "../services";

const STALE_TIME = 2000 * 60; // 2 minutes

type CustomQueryParamsType = {
  queryKey: string;
  baseURL?: string;
  url?: string;
  enabled?: boolean;
};

//TODO: replace queryKey default value
export const useCustomGetQuery = ({
  queryKey = "random",
  baseURL,
  url = "/",
  enabled = true,
}: CustomQueryParamsType) => {
  return useQuery(queryKey, () => apiClient(baseURL).get(url), {
    enabled,
    staleTime: STALE_TIME,
  });
};
