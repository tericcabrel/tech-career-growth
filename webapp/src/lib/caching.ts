import axios from 'axios';

const API_BASE_URL = process.env.REDIS_API_URL;
const API_AUTH_TOKEN = process.env.REDIS_API_TOKEN;
const CACHE_EXPIRATION_TIME = 30 * 60;

const createHttpClient = (apiBaseURL?: string, apiToken?: string) => {
  if (!apiBaseURL || !apiToken) {
    throw new Error('Api base URL or API authorization token is missing!');
  }

  const instance = axios.create({
    baseURL: apiBaseURL,
  });

  instance.defaults.headers.common['Accept'] = 'application/json';
  instance.defaults.headers.common['Content-Type'] = 'application/json';
  instance.defaults.headers.common['Authorization'] = apiToken;
  instance.defaults.timeout = 10000;

  return instance;
};

const findData = async <T>(key: string): Promise<T | null> => {
  const httpClient = createHttpClient(API_BASE_URL, API_AUTH_TOKEN);

  const response = await httpClient.get<T>(`/get/${key}`).catch((error) => {
    // TODO capture exception with sentry
    console.log(error.message);

    return { data: null };
  });

  return response.data;
};

const cacheData = async <T>(key: string, data: T): Promise<void> => {
  const dataAsString = JSON.stringify(data);

  const httpClient = createHttpClient(API_BASE_URL, API_AUTH_TOKEN);

  await httpClient.post<T>('', `["SET", ${key}, ${dataAsString}, "EX", ${CACHE_EXPIRATION_TIME}]`).catch((error) => {
    console.log(error.message);

    return { data: null };
  });
};

export { findData, cacheData };
