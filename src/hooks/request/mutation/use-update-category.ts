import { useMutation } from 'react-query';

import { UpdateCategoryInput, CategoryResponseData } from '@/types/common';
import useHttpClient from '@/hooks/use-http-client';

export const useUpdateCategory = () => {
  const httpClient = useHttpClient();

  return useMutation((input: UpdateCategoryInput) => {
    const { id, ...data } = input;

    return httpClient.put<CategoryResponseData>(`/categories/${id}/update`, data);
  });
};
