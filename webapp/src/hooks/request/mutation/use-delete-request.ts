import { useMutation } from 'react-query';
import useHttpClient from '@/hooks/use-http-client';

const useDeleteRequest = () => {
  const httpClient = useHttpClient();

  return useMutation((requestId: string) => httpClient.delete(`/requests/${requestId}/delete`));
};

export default useDeleteRequest;
