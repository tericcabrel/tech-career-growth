import { useMutation } from 'react-query';

import { CreateCategoryInput, CategoryResponseData } from '@/types/common';
import useHttpClient from '@/hooks/use-http-client';

const useCreateCategory = () => {
  const httpClient = useHttpClient();

  return useMutation((input: CreateCategoryInput) => httpClient.post<CategoryResponseData>('/categories/new', input));
};

export default useCreateCategory;
