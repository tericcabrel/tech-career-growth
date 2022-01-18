import { useMutation } from 'react-query';
import useHttpClient from '@/hooks/use-http-client';

const useDeleteCategory = () => {
  const httpClient = useHttpClient();

  return useMutation((userId: string) => httpClient.delete(`/categories/${userId}`));
};

export default useDeleteCategory;
