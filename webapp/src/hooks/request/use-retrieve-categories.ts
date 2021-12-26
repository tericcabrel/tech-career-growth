import { useQuery } from 'react-query';

import { CategoryResponseListData } from '@/types/common';
import useHttpClient from '@/hooks/use-http-client';
import { QUERY_KEYS } from '@/utils/constants';

export const useRetrieveCategories = () => {
  const httpClient = useHttpClient();

  return useQuery(QUERY_KEYS.getCategories, async () => {
    const response = await httpClient.get<CategoryResponseListData>('categories');

    return response.data.data;
  });
};
