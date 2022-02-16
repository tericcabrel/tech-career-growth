import axios, { AxiosError } from 'axios';

export const getErrorMessage = (error: unknown): string | undefined => {
  const axiosError = error as AxiosError;

  return axiosError.response?.data.message;
};

export const fetchContentFromGitHub = async (url: string): Promise<string> => {
  const response = await axios.get<string>(url).catch(() => ({ data: '## No content for the moment.' }));

  return response.data;
};
