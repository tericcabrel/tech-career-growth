import { useMutation } from 'react-query';

import useHttpClient from '@/hooks/use-http-client';

const useDeleteUser = () => {
  const httpClient = useHttpClient();

  return useMutation((userId: string) => httpClient.delete(`/users/${userId}/delete`));
};

export default useDeleteUser;
