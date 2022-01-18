import { useQuery } from 'react-query';

import { UserResponseListData } from '@/types/common';
import { QUERY_KEYS } from '@/utils/constants';
import useHttpClient from '@/hooks/use-http-client';

const useRetrieveUsers = () => {
  const httpClient = useHttpClient();

  return useQuery(QUERY_KEYS.getUsers, async () => {
    const response = await httpClient.get<UserResponseListData>('users');

    return response.data.data;
  });
};

export default useRetrieveUsers;
