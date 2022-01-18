import { useMutation } from 'react-query';

import { CreateResourceInput, ResourceResponseData } from '@/types/common';
import useHttpClient from '@/hooks/use-http-client';

const useCreateResource = () => {
  const httpClient = useHttpClient();

  return useMutation((input: CreateResourceInput) => httpClient.post<ResourceResponseData>('/resources/new', input));
};

export default useCreateResource;
