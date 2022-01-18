import { useMutation } from 'react-query';

import { UpdateUserInput, UserResponseData } from '@/types/common';
import useHttpClient from '@/hooks/use-http-client';

const useUpdateUser = (id: string) => {
  const httpClient = useHttpClient();

  return useMutation((input: UpdateUserInput) => httpClient.put<UserResponseData>(`/users/${id}/update`, input));
};

export default useUpdateUser;
