import { useMutation } from 'react-query';
import useHttpClient from '@/hooks/use-http-client';

const useDeleteResource = () => {
  const httpClient = useHttpClient();

  return useMutation((resourceId: string) => httpClient.delete(`/resources/${resourceId}/delete`));
};

export default useDeleteResource;
