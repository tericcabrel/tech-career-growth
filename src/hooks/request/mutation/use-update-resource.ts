import { useMutation } from 'react-query';

import { UpdateResourceInput, ResourceResponseData } from '@/types/common';
import useHttpClient from '@/hooks/use-http-client';

const useUpdateResource = () => {
  const httpClient = useHttpClient();

  return useMutation((input: UpdateResourceInput) => {
    const { id, ...data } = input;

    return httpClient.put<ResourceResponseData>(`/resources/${id}/update`, data);
  });
};

export default useUpdateResource;
