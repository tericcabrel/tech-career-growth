import { useQuery, UseQueryOptions } from 'react-query';

import { Resource } from '@/types/model';
import { ResourceResponseData } from '@/types/common';
import { QUERY_KEYS } from '@/utils/constants';
import useHttpClient from '@/hooks/use-http-client';

const useRetrieveResource = (resourceId: string, options?: UseQueryOptions<Resource> | undefined) => {
  const httpClient = useHttpClient();

  return useQuery(
    [QUERY_KEYS.getResource, resourceId],
    async ({ queryKey: [, id] }) => {
      const response = await httpClient.get<ResourceResponseData>(`resources/${id}`);

      return response.data.data;
    },
    // @ts-ignore
    options,
  );
};

export default useRetrieveResource;
