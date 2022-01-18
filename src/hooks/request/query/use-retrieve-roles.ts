import { useQuery } from 'react-query';

import { RoleResponseListData } from '@/types/common';
import useHttpClient from '@/hooks/use-http-client';
import { QUERY_KEYS } from '@/utils/constants';

const useRetrieveRoles = () => {
  const httpClient = useHttpClient();

  return useQuery(QUERY_KEYS.getRoles, async () => {
    const response = await httpClient.get<RoleResponseListData>('roles');

    return response.data.data;
  });
};

export default useRetrieveRoles;
