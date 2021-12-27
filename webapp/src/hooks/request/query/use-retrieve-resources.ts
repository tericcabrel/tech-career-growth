import { useQuery, UseQueryOptions } from 'react-query';

import { ResourceList, ResourceListResponseData, ResourceSearchParams } from '@/types/common';
import { QUERY_KEYS } from '@/utils/constants';
import useHttpClient from '@/hooks/use-http-client';

const useRetrieveResources = (
  { category, page, search }: ResourceSearchParams,
  options?: UseQueryOptions<ResourceList> | undefined,
) => {
  const httpClient = useHttpClient();
  const queryString = [`page=${page}`, search ? `search=${search}` : null, category ? `category=${category}` : null]
    .filter((query) => Boolean(query))
    .join('&');
  const queryKey = `${QUERY_KEYS.getResources}-${queryString}`;

  return useQuery(
    queryKey,
    async () => {
      const response = await httpClient.get<ResourceListResponseData>(`resources?${queryString}`);

      return response.data.data;
    },
    // @ts-ignore
    options,
  );
};

export default useRetrieveResources;
