import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = process.env.REDIS_API_URL;
const API_AUTH_TOKEN = process.env.REDIS_API_TOKEN;
const CACHE_EXPIRATION_TIME = 30 * 60;

class CacheClient {
  private httpClient: AxiosInstance;

  constructor() {
    if (!API_BASE_URL || !API_AUTH_TOKEN) {
      throw new Error('Api base URL or API authorization token is missing!');
    }

    this.httpClient = axios.create({
      baseURL: API_BASE_URL,
    });

    this.httpClient.defaults.headers.common['Accept'] = 'application/json';
    this.httpClient.defaults.headers.common['Content-Type'] = 'application/json';
    this.httpClient.defaults.headers.common['Authorization'] = `Bearer ${API_AUTH_TOKEN}`;
    this.httpClient.defaults.timeout = 10000;
  }

  private cacheKey(value: string): string {
    return `tcg_${value}`;
  }

  async findData<T>(key: string): Promise<T | null> {
    const response = await this.httpClient.get<{ result: T | null }>(`/get/${this.cacheKey(key)}`).catch((error) => {
      // TODO capture exception with sentry
      console.log(error.message);

      return { data: { result: null } };
    });

    return response.data.result;
  }

  async cacheData<T>(key: string, data: T): Promise<void> {
    const dataAsString = JSON.stringify(data);

    await this.httpClient
      .post<T>(`set/${this.cacheKey(key)}?EX=${CACHE_EXPIRATION_TIME}`, dataAsString)
      .catch((error) => {
        console.log(error);

        throw new Error('Fail to cache the data!');
      });
  }
}

export default CacheClient;
