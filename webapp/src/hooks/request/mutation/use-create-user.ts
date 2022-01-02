import { useMutation } from 'react-query';

import { CreateUserInput, UserResponseData } from '@/types/common';
import useHttpClient from '@/hooks/use-http-client';

const useCreateUser = () => {
  const httpClient = useHttpClient();

  return useMutation((input: CreateUserInput) => httpClient.post<UserResponseData>('/users/new', input));
};

export default useCreateUser;
