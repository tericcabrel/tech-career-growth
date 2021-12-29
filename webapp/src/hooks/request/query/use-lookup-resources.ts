import { useQuery, UseQueryOptions } from 'react-query';

import { ResourcesResponseData } from '@/types/common';
import useHttpClient from '@/hooks/use-http-client';
import { QUERY_KEYS } from '@/utils/constants';
import { Resource } from '@/types/model';

const useLookupResources = ({ search }: { search: string | null }, options: UseQueryOptions<Resource[]>) => {
  const httpClient = useHttpClient();
  const queryString = `search=${search}`;

  return useQuery(
    QUERY_KEYS.lookupResources as any,
    async () => {
      const response = await httpClient.get<ResourcesResponseData>(`resources/lookup?${queryString}`);

      return response.data.data;
    },
    options,
  );
};

export default useLookupResources;
