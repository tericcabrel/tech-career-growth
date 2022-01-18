import { useMutation } from 'react-query';

import { RequestReplyInput, RequestResponseData } from '@/types/common';
import useHttpClient from '@/hooks/use-http-client';

export const useRequestReply = () => {
  const httpClient = useHttpClient();

  return useMutation((input: RequestReplyInput) => {
    const { id, ...data } = input;

    return httpClient.put<RequestResponseData>(`/requests/${id}/reply`, data);
  });
};
