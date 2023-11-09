import { QueryKey, useQuery } from "@tanstack/react-query";
import { apiClient } from "../services";
import { STALE_TIME } from "../constants";

type CustomQueryParamsType = {
  queryKey: QueryKey;
  baseURL?: string;
  url?: string;
  enabled?: boolean;
};

export const useGetQuery = <T>({
  queryKey,
  baseURL,
  url = "",
  enabled = true,
}: CustomQueryParamsType) =>
  useQuery({
    queryKey,
    enabled,
    staleTime: STALE_TIME,
    queryFn: () =>
      apiClient(baseURL)
        .get(url)
        .then((res) => res.data as T),
  });
