import { useQuery, UseQueryOptions } from 'react-query';

import { User, UserResponseData } from '@/types/common';
import { QUERY_KEYS } from '@/utils/constants';
import useHttpClient from '@/hooks/use-http-client';

const useRetrieveUser = (userId: string, options?: UseQueryOptions<User> | undefined) => {
  const httpClient = useHttpClient();

  return useQuery(
    [QUERY_KEYS.getUser, userId],
    async ({ queryKey: [, id] }) => {
      const response = await httpClient.get<UserResponseData>(`users/${id}`);

      return response.data.data;
    },
    // @ts-ignore
    options,
  );
};

export default useRetrieveUser;
