import axios, { AxiosError } from 'axios';
import { MARKDOWN_CONTENT_FALLBACK } from '@/utils/constants';

export const getErrorMessage = (error: unknown): string | undefined => {
  const axiosError = error as AxiosError;

  return axiosError.response?.data.message;
};

export const fetchContentFromGitHub = async (url: string): Promise<string> => {
  const response = await axios.get<string>(url).catch(() => ({ data: MARKDOWN_CONTENT_FALLBACK }));

  return response.data;
};
