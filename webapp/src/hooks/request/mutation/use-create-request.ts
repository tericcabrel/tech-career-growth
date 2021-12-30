import { useMutation } from 'react-query';

import { CreateRequestInput, RequestResponseData } from '@/types/common';
import useHttpClient from '@/hooks/use-http-client';

const useCreateRequest = () => {
  const httpClient = useHttpClient();

  return useMutation((input: CreateRequestInput) => httpClient.post<RequestResponseData>('/requests/new', input));
};

export default useCreateRequest;
