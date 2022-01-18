import { useQuery, UseQueryOptions } from 'react-query';

import { RequestList, RequestListResponseData, RequestListParams } from '@/types/common';
import { QUERY_KEYS } from '@/utils/constants';
import useHttpClient from '@/hooks/use-http-client';

const useRetrieveRequests = (
  { status, page }: RequestListParams,
  options?: UseQueryOptions<RequestList> | undefined,
) => {
  const httpClient = useHttpClient();
  const queryString = [`page=${page}`, status ? `status=${status}` : null].filter((query) => Boolean(query)).join('&');
  const queryKey = `${QUERY_KEYS.getRequests}-${queryString}`;

  return useQuery(
    queryKey,
    async () => {
      const response = await httpClient.get<RequestListResponseData>(`requests?${queryString}`);

      return response.data.data;
    },
    // @ts-ignore
    options,
  );
};

export default useRetrieveRequests;
